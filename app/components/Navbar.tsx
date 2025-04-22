import { ArrowLeft  } from "lucide-react";
import React from "react";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="shadow-md  p-4 ml-64  flex justify-between">
      <div className="flex items-center text-gray-700 gap-x-3 cursor-pointer">
        {<ArrowLeft  />}
        <span className="font-bold text-xl">Stories</span>
      </div>
      <Profile/>
    </div>
  );
};

export default Navbar;
