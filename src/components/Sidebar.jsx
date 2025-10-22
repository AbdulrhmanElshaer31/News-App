import React, { useState } from "react";
import {
  Clock,
  Globe,
  Trophy,
  Palette,
  Heart,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import Buttons from "./Buttons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const SidebarItems = [
    { name: "Latest", icon: Clock },
    { name: "World", icon: Globe },
    { name: "Sports", icon: Trophy },
    { name: "Culture", icon: Palette },
    { name: "Wellness", icon: Heart },
    { name: "Economy", icon: TrendingUp },
  ];
  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-19 left-10 z-50 group
                text-white bg-gray-500
                p-2 rounded-full
                hover:bg-gray-400
                transition duration-300
                flex items-center justify-center"
        >
          <span
            className="
                absolute left-full ml-2
                top-1/2 -translate-y-1/2
                bg-gray-300 text-black px-3 py-1 rounded-3xl shadow-md
                opacity-0 translate-x-[-10px] 
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 ease-out
                whitespace-nowrap
              "
          >
            Menu
          </span>
          <Menu />
        </button>
      )}

      <aside
        className={`${
          open ? "flex" : "hidden"
        } md:flex flex-col gap-4 bg-gray-500 p-2 w-fit rounded-full fixed md:static top-19 left-10 z-40`}
      >
        <button
          onClick={() => setOpen(false)}
          className={`${open ? "flex" : "hidden"} md:hidden relative group
              text-white 
              p-2 rounded-4xl
              hover:bg-gray-400
              transition duration-300
              items-center justify-center`}
        >
          <span
            className="
                absolute left-full ml-2
                top-1/2 -translate-y-1/2
                bg-gray-300 text-black px-3 py-1 rounded-3xl shadow-md
                opacity-0 translate-x-[-10px] 
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 ease-out
                whitespace-nowrap
              "
          >
            Close
          </span>
          <X />
        </button>

        {SidebarItems.map((item, index) => (
          <Buttons key={index} icon={<item.icon />} name={item.name} />
        ))}
      </aside>
    </>
  );
}
