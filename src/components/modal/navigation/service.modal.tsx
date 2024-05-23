"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import OnlineForm from "./onlineform.modal";
import { MenuProps } from "./menu";
import Link from "next/link";

const ServiceMenu = ({ modalSetting, closFunc }: MenuProps) => {
  const [isForm, setForm] = useState(false);

  const handleForm = () => {
    setForm(!isForm);
  };

  const hand = () => {
    closFunc();
  };

  return (
    <div
      className={`fixed right-32 top-14 z-50 rounded-2xl text-white cursor-pointer ${
        modalSetting ? "block" : "hidden"
      }`}
    >
      <div className="relative border-2 rounded-b-md border-white border-t-0 bg-gray-700 px-6 py-2">
        <div className="flex flex-col gap-2">
          <Link
            href={{ pathname: "/service", query: { active_tab: "E" } }}
            onClick={hand}
          >
            Events
          </Link>
          <Link
            href={{ pathname: "/service", query: { active_tab: "VO" } }}
            onClick={hand}
          >
            Volunteer Opportunities
          </Link>
          <div className="flex flex-col gap-1">
            <p className="flex flex-row items-center gap-4">
              <Link
                href={{ pathname: "/service", query: { active_tab: "OF" } }}
                onClick={hand}
              >
                Online Form
              </Link>
              {isForm ? (
                <IoIosArrowDown onClick={handleForm} />
              ) : (
                <IoIosArrowForward onClick={handleForm} />
              )}
            </p>
            {isForm && (
              <OnlineForm modalSetting={isForm} closFunc={handleForm} />
            )}
          </div>
          <Link
            href={{ pathname: "/service", query: { active_tab: "FT" } }}
            onClick={hand}
          >
            Financials Transparency
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceMenu;
