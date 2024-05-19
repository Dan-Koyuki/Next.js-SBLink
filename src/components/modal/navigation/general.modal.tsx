import React from 'react'
import { MenuProps } from './menu';

const GeneralMenu = ({modalSetting } : MenuProps) => {
  return (
    <div
      className={`fixed right-60 top-14 z-10 rounded-2xl text-white ${
        modalSetting ? "block" : "hidden"
      }`}
    >
      <div className="border-2 rounded-b-md border-white border-t-0 cursor-pointer bg-gray-700 px-6 py-2">
        <div className="flex flex-col gap-2">
          <p>Village Profile</p>
          <p>Staffs</p>
          <p>News & Announcement</p>
          <p>Emergency Alerts</p>
          <p>Our Works</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralMenu