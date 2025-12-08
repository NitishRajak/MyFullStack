import { IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

type SidebarItem = {
  id: number;
  link: string;
  icon?: React.ReactNode;
};

export const sidebarData: SidebarItem[] = [
  { id: 1, link: "/", icon: <IoMdHome style={{ fontSize: "30px" }} /> },
  {
    id: 2,
    link: "/profile",
    icon: <IoSearchOutline style={{ fontSize: "30px" }} />,
  },
  {
    id: 6,
    link: "/explore",
    icon: <MdOutlineExplore style={{ fontSize: "30px" }} />,
  },
  {
    id: 3,
    link: "/message",
    icon: <FaRegMessage style={{ fontSize: "30px" }} />,
  },
  {
    id: 4,
    link: "/settings",
    icon: <IoSettingsSharp style={{ fontSize: "30px" }} />,
  },
  {
    id: 5,
    link: "/profile",
    icon: <RxAvatar style={{ fontSize: "30px" }} />,
  },
];
