import { AppBar } from "@/components/custom/AppBar";
import { BlogCard } from "@/components/custom/BlogCard";
import { BlogCardSkeleton } from "@/components/custom/BlogCardSkeleton";
import { useBlogs } from "@/hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return [...Array(5)].map((_, index) => <BlogCardSkeleton key={index} />);
  }

  return (
    <div>
      <AppBar />
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          authorName={blog.author.name || "Ananoymus"}
          content={blog.content}
          publishedDate="22 Feb 2024"
          title={blog.title}
          id={blog.id}
        />
      ))}
    </div>
  );
};
