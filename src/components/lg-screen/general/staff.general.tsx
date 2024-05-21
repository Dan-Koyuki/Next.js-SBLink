import { Staff } from '@/components/modal/navigation/menu';
import Image from 'next/image';
import React from 'react';

const PageStaff = () => {

  const Member: Staff[] = [{
    name: "DK",
    image: "undefinied",
    position: "Lead",
    no: "00G0"
  },]

  return (
    <div>
      <div className="fixed">
        <Image
          className="h-screen z-0"
          src={
            "https://res.cloudinary.com/dankoyuki/image/upload/v1716275626/KohoLink/jg1t3phqngzagcsaomsh.jpg"
          }
          alt="background"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-black opacity-60 rounded-r-lg"></div>
      </div>
      <div className="relative z-0 p-2">
        <p className="text-4xl text-white text-center font-bold my-2">
          {"Sunia Baru Village's Staff"}
        </p>
        <p className="text-2xl text-white text-center font-bold py-2">
          Leader / Chief
        </p>
        <div className="text-white flex flex-row justify-center">
          <div className="w-52 h-64 bg-gray-500 flex flex-col items-center p-4">
            {Member[0] && <p>{Member[0].name}</p>}
            {Member[0] && <p>Image Here</p>}
            {Member[0] && <p>{Member[0].position}</p>}
            {Member[0] && <p>{Member[0].no}</p>}
          </div>
        </div>
        <p className="text-2xl text-white text-center font-bold py-2">
          Administration
        </p>
        <div className="text-white flex flex-row justify-center gap-4">
          <div className="w-52 h-64 bg-gray-500 flex flex-col flex-wrap items-center p-4">
            {Member[0] && <p>{Member[0].name}</p>}
            {Member[0] && <p>Image Here</p>}
            {Member[0] && <p>{Member[0].position}</p>}
            {Member[0] && <p>{Member[0].no}</p>}
          </div>
          <div className="w-52 h-64 bg-gray-500 flex flex-col flex-wrap items-center p-4">
            {Member[0] && <p>{Member[0].name}</p>}
            {Member[0] && <p>Image Here</p>}
            {Member[0] && <p>{Member[0].position}</p>}
            {Member[0] && <p>{Member[0].no}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageStaff