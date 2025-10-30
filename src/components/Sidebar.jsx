import React, { useState } from "react";
import { Clock, Globe, Trophy, Palette, Heart, TrendingUp } from "lucide-react";
import Buttons from "./Buttons";

export default function Sidebar({ onCategoryChange }) {
  const [active, setActive] = useState("Latest");

  const SidebarItems = [
    { name: "Latest", icon: Clock },
    { name: "World", icon: Globe },
    { name: "Sports", icon: Trophy },
    { name: "Culture", icon: Palette },
    { name: "Wellness", icon: Heart },
    { name: "Economy", icon: TrendingUp },
  ];

  const handleClick = (name) => {
    setActive(name);
    onCategoryChange(name);
  };

  return (
    <aside className="flex flex-row md:flex-col gap-4 justify-evenly md:justify-start bg-[#19485f]/30 backdrop-blur-lg md:border md:border-[#d9e0a4]/50 p-2 w-full md:w-fit md:rounded-full z-99">
      {SidebarItems.map((item, index) => (
        <Buttons
          key={index}
          icon={<item.icon />}
          name={item.name}
          isActive={active === item.name}
          onClick={() => handleClick(item.name)}
        />
      ))}
    </aside>
  );
}