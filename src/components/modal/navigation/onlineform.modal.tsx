import React from "react";
import { MenuProps } from "./menu";
import { useRouter } from "next/navigation";

const OnlineForm = ({modalSetting, closFunc} : MenuProps) => {
  const router = useRouter();

  const Report = () => {
    router.push("/MyTest")
    console.log("testing")
  }
  return (
    <div
      className={`rounded-2xl text-white ${
        modalSetting ? "block" : "hidden"
      }`}
    >
      <div className="bg-gray-700 px-6 py-22">
        <div className="flex flex-col gap-2">
          <p onClick={Report}>Report Issue</p>
          <p>SKTM Request</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineForm;
