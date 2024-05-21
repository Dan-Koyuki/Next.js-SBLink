'use client'

import SideServiceMenu from '@/components/lg-screen/service/navigation.service';
import React, { useEffect, useState } from "react";

const ServicePages = () => {
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
        <SideServiceMenu activeMenu={handleActive} />
      </div>
      <div className="w-4/5">{isActivate === "S" && <div></div>}</div>
    </div>
  );
}

export default ServicePages