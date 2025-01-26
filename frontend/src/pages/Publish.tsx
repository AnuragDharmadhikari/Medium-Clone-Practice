import { AppBar } from "@/components/custom/AppBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      <div className="w-full flex justify-center p-10">
        <div className="flex gap-6 max-w-3xl w-full flex-col justify-center items-center">
          <Input
            onChange={(e) => settitle(e.target.value)}
            placeholder={"Title"}
          />
          <Textarea
            onChange={(e) => setcontent(e.target.value)}
            placeholder="Content"
            className="min-h-96"
          />
          <Button
            onClick={async () => {
              const res = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${res.data.id}`);
            }}
            className="pl-7 pr-7 pt-2 pb-2 cursor-pointer"
            type="button"
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
};
