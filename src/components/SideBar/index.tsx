import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SideBarRow from "./sidebarRow";
import React from "react";

const sideBarData = [
  {
    Icon: UserIcon,
    title: "Friends",
  },
  {
    Icon: UserGroupIcon,
    title: "Groups",
  },
  {
    Icon: ShoppingBagIcon,
    title: "Marketplace",
  },
  {
    Icon: ComputerDesktopIcon,
    title: "Watch",
  },
  {
    Icon: CalendarIcon,
    title: "Events",
  },
  {
    Icon: ClockIcon,
    title: "Memories",
  },
  {
    Icon: ChevronDownIcon,
    title: "See More",
  },
];
const SideBar = () => {
  return (
    <div className="p-2 flex flex-col max-w-[300px]">
      {sideBarData.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <SideBarRow Icon={data.Icon} title={data.title} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SideBar;
