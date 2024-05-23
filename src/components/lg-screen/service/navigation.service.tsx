"use client";
import React, { useEffect, useState } from "react";
import { MdEvent, MdOutlineVolunteerActivism } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";

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
              handleActive("E");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "E"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <MdEvent size={40} />
            Events
          </p>
          <p
            onClick={() => {
              handleActive("VO");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "VO"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <MdOutlineVolunteerActivism size={40} />
            Volunteer Opportunities
          </p>
          <p
            onClick={() => {
              handleActive("OF");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "OF"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <FaWpforms size={35} />
            Online Form
          </p>
          <p
            onClick={() => {
              handleActive("FT");
            }}
            className={`cursor-pointer py-4 rounded-l-lg flex flex-row gap-2 items-center ${
              isActivate === "FT"
                ? "border-lime-500 border-4 border-r-0 pl-4"
                : "border-0"
            }`}
          >
            <CiMoneyCheck1 size={40} />
            Financials Transparency
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideServiceMenu;
