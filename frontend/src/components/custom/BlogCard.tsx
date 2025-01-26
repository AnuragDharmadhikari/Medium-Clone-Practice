import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  authorName,
  content,
  publishedDate,
  title,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col justify-center pl-24 pr-24 pt-2 lg:pl-100 lg:pr-100">
        <Card className="cursor-pointer">
          <div className="flex items-center gap-3 pl-5 pt-2 pb-2 ">
            <div>
              <Avatar className="w-9 h-9">
                <AvatarFallback className="font-semibold">
                  {authorName[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="font-medium text-sm">{authorName}</div>
            <div className="text-xs font-light text-slate-400 pt-0.5">
              {publishedDate}
            </div>
          </div>
          <Separator />
          <CardHeader className="-mt-3">
            <CardTitle className="font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-base">
            {content.slice(0, 100) + " ..."}
          </CardContent>
          <CardFooter className="mt-5 text-sm font-light">{`${Math.ceil(
            content.length / 100
          )} min read`}</CardFooter>
        </Card>
      </div>
    </Link>
  );
};
