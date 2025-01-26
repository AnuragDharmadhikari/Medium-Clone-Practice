import { Button } from "../ui/button";
import { signupInputTypes } from "@anurag_2002/medium-common";
import { LabelledInputs } from "./LabelledInputs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<signupInputTypes>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const data = response.data;
      localStorage.setItem("token", `Bearer ${data.jwt}`);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      console.log("The Signup request failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-center gap-2 w-2xl p-30">
        <div className="font-bold text-4xl">
          {type === "signup" ? "Create an account" : "Login to your account"}
        </div>
        <div className="flex text-lg justify-center text-slate-500 font-medium gap-2 mb-4">
          {type === "signup"
            ? " Already have an account?"
            : "Don't have an account?"}
          <Link
            to={type === "signup" ? "/signin" : "/signup"}
            className="underline text-slate-500"
          >
            {type === "signup" ? "Sign In" : "Sign Up"}
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 mt-3 p-5">
          {type === "signup" ? (
            <LabelledInputs
              label={"Username"}
              placeholder={"Enter your username"}
              type="text"
              onChange={(e) =>
                setPostInputs((c) => ({ ...c, name: e.target.value }))
              }
            />
          ) : null}
          <LabelledInputs
            label={"Email"}
            placeholder={"Enter your email"}
            type="email"
            onChange={(e) =>
              setPostInputs((c) => ({ ...c, email: e.target.value }))
            }
          />
          <LabelledInputs
            label={"Password"}
            placeholder={"Enter your password"}
            type="password"
            onChange={(e) =>
              setPostInputs((c) => ({ ...c, password: e.target.value }))
            }
          />
          <div className="flex flex-col gap-3 mt-6">
            <Button onClick={sendRequest}>
              {type === "signup" ? "Sign Up" : "Sign In"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
