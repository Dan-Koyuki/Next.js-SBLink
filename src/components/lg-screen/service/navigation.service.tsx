"use client";
import React, { useEffect, useState } from "react";
import {
  MdOutlineHolidayVillage,
  MdOutlineAddAlert,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";

type ActiveMenu = {
  activeMenu: (menu: String) => void;
};

const SideServiceMenu = ({ activeMenu }: ActiveMenu) => {
  const [path, setPath] = useState<String>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const search = searchParams.get("active_tab");
      setPath(search || "");
      setActivate(path);
    }
  }, [path]);

  console.log(path);

  const [isActivate, setActivate] = useState<String>("");

  const handleActive = (type: string) => {
    activeMenu(type);
    setActivate(type);
  };

  return (
    <div className="fixed z-0 w-1/5">
      <div className="flex flex-col side-general-menu bg-gray-700 items-center text-white pt-5 font-bold">
        <div className="flex flex-col gap-10 w-full pl-4">
          <p
            onClick={() => {
              handleActive("VP");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "VP"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <MdOutlineHolidayVillage size={40} />
            Events
          </p>
          <p
            onClick={() => {
              handleActive("S");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "S"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <ImProfile size={35} />
            Volunteer Opportunities
          </p>
          <p
            onClick={() => {
              handleActive("NA");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "NA"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <IoNewspaperOutline size={40} />
            Online Form
          </p>
          <p
            onClick={() => {
              handleActive("EA");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "EA"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <MdOutlineAddAlert size={40} />
            Financials Transparency
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideServiceMenu;
