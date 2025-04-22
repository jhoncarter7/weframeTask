"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  
  FileText,
  Headphones,
  House,
  Settings,
  SquareUserRound,
  UsersRound,
} from "lucide-react";
const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <House size={20}/> },
  { label: "Content", href: "/stories", icon: <FileText size={20}/> },
  { label: "Users", href: "/users", icon: <SquareUserRound size={20}/> },
  { label: "Tasks", href: "/tasks", icon: <UsersRound size={20}/> },
  { label: "Settings", href: "/settings", icon: <Settings size={20}/> },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className=" bg-white border-r h-screen sticky top-0 flex flex-col py-4 shadow-md font-urbanist">
      <div className="p-4 text-xl font-bold"></div>
      <nav className="flex-1 px-6 space-y-1  justify-between">
        {navItems.map((item) => {
          const isActive = item.href === pathname;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block p-4 rounded transition-colors
                ${
                  isActive
                    ? "text-indigo-100 bg-primary"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
        
      </nav>
      <div className="px-6">
      <div className="flex items-center space-x-2 px-4 py-2 bg-secondary text-gray-600 rounded-2xl cursor-pointer">
          <Headphones />
          <span className="text-sm font-medium font-urbanist ">Contact Support</span>
        </div>
      </div>
    </aside>
  );
}
