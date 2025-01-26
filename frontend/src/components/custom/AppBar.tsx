import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const AppBar = () => {
  return (
    <div>
      <Menubar className="p-7">
        <MenubarMenu>
          <div className="flex justify-between w-full ">
            <Link to={"/blogs"}>
              <div className=" flex items-center text-xl font-bold text-gray-800 lg:text-2xl hover:text-gray-600 transition duration-300">
                Medium
              </div>
            </Link>

            <div className="flex gap-6">
              <div>
                <Link to={"/publish"}>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="bg-green-500 text-white pt-3 pb-3 pr-5 pl-5 cursor-pointer rounded-full"
                  >
                    New
                  </Button>
                </Link>
              </div>
              <Avatar>
                <AvatarFallback className="text-lg font-semibold text-slate-800 bg-slate-300 rounded-full">
                  A
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
