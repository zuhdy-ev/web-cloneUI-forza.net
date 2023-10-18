"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logoForza from "@/public/assets/ForzaJourney/logoForza.png";

export default function ForzaJourney() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="w-full h-[25rem] flex flex-col items-center justify-center bg-[#1d1d1d]">
        <div className="w-[49%] h-[10%] flex justify-center items-center">
          <Image
            src={logoForza}
            width={0}
            height={0}
            className="w-32 translate-y-5"
          />
        </div>
        <div className="w-[49%] h-[60%] border border-white rounded-md text-white flex flex-col items-center justify-center">
          <div
            className="font-acumin-black text-[3rem]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            SEE YOUR FORZA JOURNEY
          </div>
          <div
            className="text-center px-28 text-[0.8rem] my-2"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Whether you play Forza Horizon, Forza Motorsport, or both – here's
            where you can view your in-game achievements, photo gallery and see
            how your accomplishments stack up against the community.
          </div>
        </div>
        <button className="cursor-pointer w-[9rem] px-2 py-[0.35rem] text-[0.85rem] text-white font-bold rounded-sm hover:text-white duration-300 hover:border-[#CC0000] bg-[#CC0000] relative flex items-center justify-center group -translate-y-4">
          View My Forza
        </button>
      </div>
    </>
  );
}
