import React from "react";
import Input from "../components/ui/Input";
import { CalendarDays, ListFilter, Search } from "lucide-react";
import { Button } from "../components/ui/Button";

const page = () => {
  return (
    <div className="px-4">
      <div>
        <div className="w-full shadow-sm p-2 rounded-sm ">
          <div className="flex items-center justify-self-end  gap-x-12">
            <div className="flex  gap-x-4 items-center  ">
              <Input className="" icon={<Search size={20} /> }  placeholder="search"/>
              <div className="bg-secondary p-2 rounded-lg ">
                <CalendarDays width={20} height={20} />
              </div>
              <div className="bg-secondary p-2 rounded-lg">
                <ListFilter width={20} height={20} />
              </div>
            </div>
            <Button variant="primary"> Add New Story</Button>
          </div>
        </div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
};

export default page;
