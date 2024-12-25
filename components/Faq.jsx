"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgFaq from "@/public/assets/Faq/bgFaq.webp";
import forzaMotorsport from "@/public/assets/Faq/forzaMotorsport.webp";
import forzaHorizon from "@/public/assets/Faq/forzaHorizon.png";

export default function faq() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[30rem] border border-red-500 flex items-center justify-center">
        <div className="absolute z-0">
          <Image
            src={bgFaq}
            alt="bg"
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute z-10 w-[75%] h-auto flex flex-col">
          <div className="w-full h-32 flex flex-col items-center justify-center my-5">
            <div
              className="font-acumin-black text-[3rem] text-white"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              FAQ
            </div>
            <div
              className="font-segoeUI-bold text-white"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Your Forza Questions, Answered.
            </div>
            <div
              className="text-center border border-black text-white w-[45%] text-[0.8rem]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Have a Forza Horizon or Forza Motorsport question? Whether you’re
              driving on the open road or a racetrack, our dedicated FAQs have
              the answers you need so you can swiftly return to the driver’s
              seat.
            </div>
          </div>
          <div className="w-full h-36 flex my-5 gap-5">
            <div className="relative w-1/2 h-full flex group">
              <div className="w-[0.5rem] h-full bg-orange-500 rounded-tl-md rounded-bl-md"></div>
              <div
                className="w-full h-full"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Image
                  src={forzaMotorsport}
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute text-white right-10 -bottom-5 group-hover:right-8 duration-1000">
                <span className="h-32 w-32 text-3xl">{`>>>`}</span>
              </div>
            </div>
            <div
              className="relative w-1/2 h-full flex group"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-[0.5rem] h-full bg-[#e23a7f] rounded-tl-md rounded-bl-md"></div>
              <Image
                src={forzaHorizon}
                width={0}
                height={0}
                className="w-full h-full"
              />
              <div className="absolute text-white right-10 -bottom-5 group-hover:right-8 duration-1000">
                <span className="h-32 w-32 text-3xl">{`>>>`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
