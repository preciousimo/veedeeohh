import React from "react";
import { RiHomeHeartFill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import SideBtn from "./SideBtn";

export default function Sidebar() {
  const sideItems = [
    { name: "Main", icon: <RiHomeHeartFill /> },
    { name: "Mini", icon: <MdSlowMotionVideo /> },
    { name: "Channels", icon: <BsFileEarmarkPlus /> },
    { name: "Collection", icon: <MdOutlineVideoLibrary /> },
    { name: "Past", icon: <AiOutlineFieldTime /> },
  ];
  return (
    <div className="hidden md:flex flex-col gap-4 pt-4 items-center px-2 lg:px-7">
        {sideItems.map((item) => (
            <SideBtn name={item.name} icon={item.icon}/>
        ))}
    </div>
  );
};
