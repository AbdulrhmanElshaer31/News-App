import React from "react";
import { Clock, Globe, Trophy, Palette, Heart, TrendingUp } from "lucide-react";
import Buttons from "./Buttons";

export default function Sidebar() {
  const SidebarItems = [
    { name: "Latest", icon: Clock },
    { name: "World", icon: Globe },
    { name: "Sports", icon: Trophy },
    { name: "Culture", icon: Palette },
    { name: "Wellness", icon: Heart },
    { name: "Economy", icon: TrendingUp },
  ];
  return (
    <aside className="flex md:flex-col sm:flex-col gap-4 bg-gray-500 p-2 w-fit rounded-full">
      {SidebarItems.map((item, index) => (
        <Buttons key={index} icon={<item.icon />} name={item.name} />
      ))}
    </aside>
  );
}
