import React from 'react'
import { MenuProps } from './menu';
import Link from 'next/link';

const GeneralMenu = ({modalSetting, closFunc } : MenuProps) => {
  const hand = () => {
    closFunc();
  }
  return (
    <div
      className={`fixed right-60 top-14 z-10 rounded-2xl text-white ${
        modalSetting ? "block" : "hidden"
      }`}
    >
      <div className="border-2 rounded-b-md border-white border-t-0 cursor-pointer bg-gray-700 px-6 py-2">
        <div className="flex flex-col gap-2">
          <Link
            href={{ pathname: "/general", query: { active_tab: "VP" } }}
            onClick={hand}
          >
            Village Profile
          </Link>
          <Link
            href={{ pathname: "/general", query: { active_tab: "S" } }}
            onClick={hand}
          >
            Staffs
          </Link>
          <Link
            href={{ pathname: "/general", query: { active_tab: "NA" } }}
            onClick={hand}
          >
            News & Announcement
          </Link>
          <Link
            href={{ pathname: "/general", query: { active_tab: "EA" } }}
            onClick={hand}
          >
            Emergency Alerts
          </Link>
          <Link
            href={{ pathname: "/general", query: { active_tab: "OW" } }}
            onClick={hand}
          >
            Our Works
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GeneralMenu