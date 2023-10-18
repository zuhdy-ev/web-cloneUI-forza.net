"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image from "@/public/assets/Community/imgCommunity.webp";

export default function Community() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
        <div className="w-full h-[27%] bg-[#1d1d1d]"></div>
        <div className="w-full h-[73%] ">
          <Image
            src={image}
            alt="Community"
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-[30rem] h-96 bg-white rounded-sm rounded-br-[2rem] top-0 left-52">
          <div className="w-full h-full flex flex-col p-10 ">
            <div
              className="font-acumin-black text-[3rem]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              COMMUNITY
            </div>
            <div
              className="text-[0.8rem] my-5"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              The Forza community is home to the most talented and passionate
              players, car lovers and racing enthusiasts. If you’re a painter
              who designs liveries and vinyls; a tuner unlocking the full
              potential of every car; an EventLab creator sharing custom races,
              challenges, stunts, and new game modes; or a fan of Forza who
              simply loves playing our games, then we want to hear from you!
              Everyone is welcome in the Forza community and we’re grateful to
              have you.
            </div>
            <button className="cursor-pointer w-[9rem] px-2 py-[0.35rem] text-[0.85rem] text-white font-bold rounded-sm hover:text-white duration-300 hover:border-[#CC0000] bg-[#CC0000] relative flex items-center justify-center group mt-4">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
