import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex p-2 items-center  border-[1px] rounded-md border-gray-200 gap-x-5">
      <div>
        <Image
          src="/images/profile.png"
          alt="profile"
          width={34}
          height={34}
        ></Image>
      </div>
      <div className="text-gray-700">
        <span className="text-xs ">Welcome back</span>
        <p className="">Nikhil Rai</p>
      </div>
      <div>
        <ChevronDown className="cursor-pointer" color={"#5a5858"}/>
      </div>
    </div>
  );
};

export default Profile;
