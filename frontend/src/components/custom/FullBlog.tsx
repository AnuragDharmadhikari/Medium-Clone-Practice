import { Blog } from "@/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-12 pt-10 justify-center">
        <div className="col-span-8">
          <Card className="shadow-none border-none">
            <CardHeader>
              <CardTitle className="font-extrabold text-5xl mb-2">
                {blog.title}
              </CardTitle>
              <CardDescription>Posted on Auguts 2 2024</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 text-slate-700">
              {blog.content}
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col col-span-4 gap-4 mt-6">
          <div className="font-semibold text-lg">Author</div>
          <div className="flex gap-6">
            <div className="flex justify-center items-center">
              <Avatar>
                <AvatarFallback className="bg-slate-400 text-xl text-slate-800">
                  {blog.author.name[0]}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-bold text-2xl">{blog.author.name}</div>
              <div className="text font-light">
                Master of mirth, puerveyor of puns, and the funniest person in
                the kingdom.
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
