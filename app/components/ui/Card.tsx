import React from "react";

import { Eye, MoreHorizontal, Box } from "lucide-react";
import { Button } from "./Button";

export interface ContentCardProps {
  imageUrl: string;
  title: string;
  category: string;
  date: string;
  status: "Pending" | "Published" | "Draft" | "Archived";
  views: number;
  otherStatIcon?: React.ReactNode;
  onViewClick?: () => void;
  onMoreClick?: () => void;
  className?: string;
  priority?: boolean;
}

const getStatusClasses = (status: ContentCardProps["status"]): string => {
  switch (status) {
    case "Pending":
      return "bg-blue-100 text-blue-800";
    case "Published":
      return "bg-green-100 text-green-800";
    case "Draft":
      return "bg-yellow-100 text-yellow-800";
    case "Archived":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ContentCard({
  imageUrl,
  title,
  category,
  date,
  status,
  views,
  otherStatIcon = <Box size={14} />,
  onViewClick,
  onMoreClick,
  className = "",
}: ContentCardProps) {
  return (
    <div
      className={`min-w-full md:max-w-sm rounded-lg overflow-hidden shadow-lg bg-white text-white ${className} `}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full h-56">
        <div className="absolute top-2 right-2 flex space-x-1.5 z-10">
          <span className="flex items-center space-x-1 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
            <Eye size={14} />
            <span>{views}</span>
          </span>
          {otherStatIcon && (
            <span className="flex items-center justify-center bg-black/60 text-white text-xs font-medium p-1 rounded-full w-[26px] h-[26px]">
              {otherStatIcon}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4  to-transparent z-10">
          <h3 className="text-white text-xl font-semibold leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4 gap-x-2">
          <div className="flex items-center space-x-2 text-xs ">
            <span className="font-semibold uppercase ">{category}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <span
            className={`px-3 py-2 rounded-lg text-xs font-medium ${getStatusClasses(
              status
            )}`}
          >
            {status}
          </span>
        </div>

        <div className="flex items-center justify-between space-x-3">
          <Button
            variant="secondary"
            onClick={onViewClick}
            className="flex-grow bg-gray-100 hover:bg-gray-200  font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out text-sm"
          >
            View
          </Button>
          <Button
            variant="secondary"
            onClick={onMoreClick}
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200  font-medium p-2 rounded-lg transition duration-150 ease-in-out"
            aria-label="More options"
          >
            <MoreHorizontal size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
