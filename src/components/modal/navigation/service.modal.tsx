"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import OnlineForm from "./onlineform.modal";
import { MenuProps } from "./menu";

const ServiceMenu = ({ modalSetting }: MenuProps) => {
  const [isForm, setForm] = useState(false);

  const handleForm = () => {
    setForm(!isForm);
  };

  return (
    <div
      className={`fixed right-32 top-14 z-50 rounded-2xl text-white cursor-pointer ${
        modalSetting ? "block" : "hidden"
      }`}
    >
      <div className="relative border-2 rounded-b-md border-white border-t-0 bg-gray-700 px-6 py-2">
        <div className="flex flex-col gap-2">
          <p>Events</p>
          <p>Volunteer Opportunities</p>
          <p
            onClick={handleForm}
            className="flex flex-col gap-1"
          >
            <p className="flex flex-row items-center gap-4">
              Online Form
              {isForm ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </p>
            {isForm && <OnlineForm modalSetting={isForm} />}
          </p>
          <p>Financials Transparency</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceMenu;
