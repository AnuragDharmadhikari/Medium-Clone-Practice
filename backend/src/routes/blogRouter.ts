import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@anurag_2002/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  // Bearer Token
  const token = header.split(" ")[1];

  try {
    const user = (await verify(token, c.env.JWT_SECRET)) as { id: string };

    if (user) {
      c.set("userId", user.id); // Now the types align
      await next();
    } else {
      c.status(403);
      return c.json({ error: "unauthorized" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json({
      error: "error while creating blog because of wromg inputs",
    });
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });

    return c.json({
      id: blog.id,
      blog: blog,
    });
  } catch (error) {
    c.status(403);
    return c.json({ error: "unable to create blog" });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ blogs: blogs });
  } catch (error) {
    c.status(403);
    return c.json({ error: "unable to get all blogs" });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({ error: "couldn't find the blog" });
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json({
      error: "error while updating blog because of wromg inputs",
    });
  }

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      id: blog.id,
      blog: blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({ error: "unable to update the blog" });
  }
});
