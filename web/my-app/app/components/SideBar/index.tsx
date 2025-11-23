import React from "react";
import { sidebarData } from "./data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      {sidebarData?.map((item) => {
        return (
          <div key={item.link} style={{ marginBottom: "15px" }}>
            <Link href={item.link}> {item.icon}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
