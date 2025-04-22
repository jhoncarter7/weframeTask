import React from "react";
import Input from "../components/ui/Input";
import { CalendarDays, ChartNoAxesCombined, ListFilter, Search } from "lucide-react";
import { Button } from "../components/ui/Button";
import { ContentCard } from "../components/ui/Card";
import { StoriesData } from "../data/dummyData";
const page = () => {
  return (
    <div className="px-4  ">
      <div className="">
        {/* top search */}
        <div className="w-full shadow-sm p-2 rounded-sm ">
          <div className="flex items-center justify-self-end  gap-x-12">
            <div className="flex  gap-x-4 items-center  ">
              <Input
                className=""
                icon={<Search size={20} />}
                placeholder="search"
              />
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

        {/* filter by states */}
        <div className="flex gap-3 pt-6 flex-wrap">
          <Button variant="primary">All(4,500)</Button>
          <Button variant="secondary">Draft(1,200)</Button>
          <Button variant="secondary">Pending(800)</Button>
          <Button variant="secondary">Published(400)</Button>
          <Button variant="secondary">Archived(5,000)</Button>
        </div>

        {/* here mapping the card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8 pt-10">
          {StoriesData.map((story) => (
            <div key={story.imageUrl} className="mx-auto min-w-full">
              <ContentCard
                imageUrl={story.imageUrl} 
                title={story.title}
                category={story.category}
                date={story.date}
                status={story.status}
                views={story.views}
                otherStatIcon={<ChartNoAxesCombined  size={14} />}
                className="transition ease-in-out hover:scale-105 duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
