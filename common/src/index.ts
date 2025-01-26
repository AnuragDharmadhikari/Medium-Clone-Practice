import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type signupInputTypes = z.infer<typeof signupInput>;
export type signinInputTypes = z.infer<typeof signinInput>;
export type createBlogTypes = z.infer<typeof createBlogInput>;
export type updateBlogTypes = z.infer<typeof updateBlogInput>;
