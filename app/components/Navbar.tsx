"use client";
import { ArrowLeft, Menu  } from "lucide-react";
import React from "react";
import Profile from "./Profile";
import { useDispatch } from "react-redux";

import { toggleMenu } from "../store/StoreSlice";

const Navbar = () => {
  
  const dispatch = useDispatch();
  return (
    <div className="shadow-md bg-white p-4 flex justify-between">
      <div className="flex items-center text-gray-700 gap-x-3 cursor-pointer">
        <div className="hidden md:block">
        {<ArrowLeft  />}
        </div>
        <div className="block md:hidden">
          <Menu className= "cursor-pointer" onClick={() => dispatch(toggleMenu())}/>
       
        </div>
        <span className="font-bold text-xl">Stories</span>
      </div>
      <Profile/>
    </div>
  );
};

export default Navbar;
