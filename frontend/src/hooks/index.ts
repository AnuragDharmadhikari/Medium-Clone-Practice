import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Author {
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: Author;
}

export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState<Blog[]>([]);

  const getBlogs = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setblogs(res.data.blogs);
    setloading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { loading, blogs };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);
  const [blog, setblog] = useState<Blog>();

  const getBlog = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setblog(res.data.blog);
    // console.log(res.data.blog)
    setloading(false);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return { loading, blog };
};
