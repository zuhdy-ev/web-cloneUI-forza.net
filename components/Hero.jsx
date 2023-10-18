"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import gradient from "@/public/assets/General/gradient-black.jpg";

export default function HeroBeranda() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="relative w-screen h-screen pt-20 flex justify-center bg-orange-500">
        <div className="absolute w-screen h-screen border border-black top-0">
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/aL4h5cMONIs?autoplay=1&controls=0&loop=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay"
            loop="true"
            allowFullScreen
            className="w-full h-full aspect-video scale-150"
          ></iframe>
        </div>
        <div className="absolute w-screen h-screen border border-black top-0 bg-black opacity-50">
          {/* <Image
            src={gradient}
            width={0}
            height={0}
            className="bottom-0 w-full h-full"
          /> */}
        </div>
        <div className="absolute w-[43%] h-[85%] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div
              className="flex flex-col h-44 items-center justify-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="text-[5rem] font-acumin-black text-white translate-y-[34%]">
                CARS.
              </div>
              <div className="text-[5rem] font-acumin-black text-white translate-y-[-10%]">
                COMMUNITY.
              </div>
              <div className="text-[5rem] font-acumin-black text-white translate-y-[-50%]">
                CREATIVITY.
              </div>
            </div>
            <hr
              className="w-8 text-center text-bold border border-white mt-12"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            />
            <h2
              className="w-full text-center text-white text-[17px] leading-6 mt-5"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Forza Motorsport is now available on Xbox Series X|S and PC!
              Purchase the Premium Edition or Premium Add-Ons Bundle to access
              even more cars and perks.
            </h2>
          </div>
          <div className="w-full mt-12 translate-y-[20px] h-10 gap-4 flex items-center justify-center bottom-0">
            <button
              className="px-6 py-[0.37rem] rounded-sm bg-[#fdb62e] font-segoeUI-bold text-[14px]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Explore Motorsport
            </button>
            <button
              className="px-6 py-[0.37rem] rounded-sm bg-[#e23a7f] font-segoeUI-bold text-[14px] text-white"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Explore Horizon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
