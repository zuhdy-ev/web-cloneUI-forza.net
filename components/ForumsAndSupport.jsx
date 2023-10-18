"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import forumsIcon from "@/public/assets/ForumsAndSupport/forumsIcon.svg";
import supportIcon from "@/public/assets/ForumsAndSupport/supportIcon.svg";

export default function ForumsAndSupport() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[29.7rem] flex bg-[#1d1d1d]">
        <dir className="w-1/2 bg-[#b30000] flex flex-col items-center justify-center text-white rounded-br-[1.5rem]">
          <div className="w-[60%] h-[63%] flex flex-col justify-between">
            <div
              className="w-20"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src={forumsIcon}
                alt="forums"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex">
                <div
                  className="font-acumin-black text-[2.9rem]"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  FORUMS
                </div>
                <div className="font-acumin-black text-[2.9rem] ml-10">{`>>>`}</div>
              </div>
              <div
                className="text-[0.85rem] font-segoeUI w-[85%] leading-4"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Whether you’re eager to chat about Forza, submit game content
                ideas for Horizon or Motorsport, discover community created
                content, or talk about gaming or car culture – the Forza Forums
                are the home for you.
              </div>
            </div>
            <button
              className="flex font-segoeUI font-bold text-[0.8rem] group"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div>Go To Forums</div>
              <div
                className="ml-5 group-hover:ml-6 duration-700"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >{`>`}</div>
            </button>
          </div>
        </dir>
        <dir className="w-1/2 bg-[#1d1d1d] flex items-center justify-center text-white">
          <div className="w-[60%] h-[63%] flex flex-col justify-between">
            <div
              className="w-20"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src={supportIcon}
                alt="support"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex">
                <div
                  className="font-acumin-black text-[2.9rem]"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  SUPPORT
                </div>
                <div
                  className="font-acumin-black text-[2.9rem] ml-10"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >{`>>>`}</div>
              </div>
              <div
                className="text-[0.85rem] font-segoeUI w-[85%] leading-4"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                If you have an in-game issue and require assistance, we are here
                to help. Submit a ticket or browse our extensive library of
                articles featuring game tips and troubleshooting steps for
                commonly reported issues.
              </div>
            </div>
            <button
              className="flex font-segoeUI font-bold text-[0.8rem] group"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div>Go To Support</div>
              <div className="ml-5 group-hover:ml-6 duration-700">{`>`}</div>
            </button>
          </div>
        </dir>
      </div>
    </>
  );
}
