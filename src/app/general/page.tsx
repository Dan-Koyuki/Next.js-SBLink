'use client'

import SideGeneralMenu from '@/components/lg-screen/general/navigation.general'
import PageStaff from '@/components/lg-screen/general/staff.general'
import React, { useEffect, useState } from "react";

const GeneralsPages = () => {
  const [isActivate, setActivate] = useState<String>("");
  const [path, setPath] = useState<String>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const search = searchParams.get("active_tab");
      setPath(search || "");
      setActivate(path);
    }
  }, [path]);

  const handleActive = (type:String) => {
    setActivate(type)
  }
  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <SideGeneralMenu activeMenu={handleActive} />
      </div>
      <div className="w-4/5">{isActivate === "S" && <PageStaff />}</div>
    </div>
  );
}

export default GeneralsPages