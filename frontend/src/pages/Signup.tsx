import { Auth } from "@/components/custom/Auth";
import { Quote } from "@/components/custom/Quote";

export const Signup = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div>
          <Auth type={"signup"} />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
