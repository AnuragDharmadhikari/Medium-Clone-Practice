import { AppBar } from "@/components/custom/AppBar";
import { FullBlog } from "@/components/custom/FullBlog";
import { FullBlogSkeleton } from "@/components/custom/FullBlogSkeleton";
import { useBlog } from "@/hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <FullBlogSkeleton />;
  }

  return (
    <div>
      <AppBar />
      <div className=" pr-10 pl-10 lg:pr-50 lg:pl-50">
        {blog && <FullBlog blog={blog} />}
      </div>
    </div>
  );
};
