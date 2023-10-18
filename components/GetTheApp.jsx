import React from "react";
import Image from "next/image";

import bg from "@/public/assets/GetTheApp/backgroundAspalt.webp";
import banner from "@/public/assets/GetTheApp/banner.webp";

export default function GetTheApp() {
  return (
    <>
      <div className="relative w-full h-[25rem] flex items-center justify-center">
        <div className="absolute w-full h-full">
          <Image
            src={bg}
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-[#1d1d1d] opacity-70"></div>
        <div className="absolute w-[75%] h-[80%] flex">
          <div className="h-full w-1/3 flex flex-col -translate-x-6">
            <div className="font-acumin-black text-[3rem] leading-10 text-white">
              GET FORZA MOTORSPORT
            </div>
            <div className="text-[0.8rem] my-5 text-white">
              Out-build the competition in the new Builders Cup Career Mode.
              Race in adjudicated multiplayer events. Compete in over 500 cars
              across 20 world-famous tracks with cutting edge AI, advanced
              physics, tire and fuel strategy, and driver and safety ratings.
              Purchase the Premium Edition or Premium Add-Ons Bundle to get Car
              Pass, Race Day Car Pack, VIP and Welcome Pack.
            </div>
            <button className="cursor-pointer w-[9rem] px-2 py-[0.35rem] text-[0.85rem] text-white font-bold rounded-sm hover:text-white duration-300 hover:border-[#CC0000] bg-[#CC0000] relative flex items-center justify-center group">
              Microsoft Store
            </button>
          </div>
          <div className="h-[26rem] w-2/3 rounded-br-[2rem] rounded-md translate-y-[-3rem]">
            <Image
              src={banner}
              width={0}
              height={0}
              className="w-full h-full object-cover rounded-md rounded-br-[2rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
