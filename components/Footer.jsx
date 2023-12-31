"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logoForzaMotorsport from "@/public/assets/Footer/logoForzaMotorsport.svg";
import logoForzaHorizon from "@/public/assets/Footer/logoForzaHorizon.svg";
import iconFacebook from "@/public/assets/Footer/iconFacebook.svg";
import iconInstagram from "@/public/assets/Footer/iconInstagram.svg";
import iconTwitter from "@/public/assets/Footer/iconTwitter.svg";
import iconYouTube from "@/public/assets/Footer/iconYouTube.svg";
import iconTiktok from "@/public/assets/Footer/iconTiktok.svg";
import logoTurn10 from "@/public/assets/Footer/logoTurn10.svg";
import logoPlaygroundGames from "@/public/assets/Footer/logoPlaygroundGames.svg";
import logoXbox from "@/public/assets/Footer/logoXbox.svg";
import logoESRB from "@/public/assets/Footer/logoESRB.svg";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[28rem] flex items-center justify-center bg-black text-white">
        <div className="w-[77%] h-[80%] flex flex-col ">
          <div className="w-full h-1/3  flex">
            <div className="w-1/2 h-full  flex flex-col items-center justify-end translate-x-28">
              <div
                className=" h-[30%]"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Image
                  src={logoForzaMotorsport}
                  alt="logoForzaMotorsport"
                  width={0}
                  height={0}
                  className="w-full h-full"
                />
              </div>
              <div className=" flex mt-3">
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconFacebook}
                    alt="iconFacebook"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconInstagram}
                    alt="iconInstagram"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconTwitter}
                    alt="iconTwitter"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconYouTube}
                    alt="iconYouTube"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full  flex flex-col items-center justify-end -translate-x-28">
              <div
                className=" h-[30%]"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Image
                  src={logoForzaHorizon}
                  alt="logoForzaHorizon"
                  width={0}
                  height={0}
                  className="w-full h-full"
                />
              </div>
              <div className=" flex mt-3">
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconTiktok}
                    alt="iconTiktok"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconFacebook}
                    alt="iconFacebook"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconInstagram}
                    alt="iconInstagram"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconTwitter}
                    alt="iconTwitter"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="w-6 h-6 ml-5 hover:opacity-60 duration-700 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Image
                    src={iconYouTube}
                    alt="iconYouTube"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 my-5 flex items-center justify-center">
            <div
              className="h-14 ml-5 hover:opacity-60 duration-700 cursor-pointer"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src={logoTurn10}
                alt="logoTurn10"
                width={0}
                height={0}
                className="w-full h-full"
              />
            </div>
            <div
              className="h-14 ml-5 hover:opacity-60 duration-700 cursor-pointer"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src={logoPlaygroundGames}
                alt="logoPlaygroundGames"
                width={0}
                height={0}
                className="w-full h-full"
              />
            </div>
            <div
              className="h-14 ml-5 hover:opacity-60 duration-700 cursor-pointer"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src={logoXbox}
                alt="logoXbox"
                width={0}
                height={0}
                className="w-full h-full"
              />
            </div>
            <div
              className="h-14 ml-5 hover:opacity-60 duration-700 cursor-pointer"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src={logoESRB}
                alt="logoESRB"
                width={0}
                height={0}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full h-[25%]  flex flex-col">
            <div
              className=" w-full h-full flex items-center justify-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Turn 10 Studios
              </div>
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Terms of Use
              </div>
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Support
              </div>
            </div>
            <div
              className=" w-full h-full flex items-center justify-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Playground Games
              </div>
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Trademarks
              </div>
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Forums
              </div>
            </div>
            <div
              className=" w-full h-full flex items-center justify-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-1/3 h-full  flex items-center justify-center hover:opacity-60 duration-1000 cursor-pointer text-[0.8rem] font-segoeUI">
                Privacy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[2rem] bg-[#b40000] text-white flex items-center justify-center text-[0.8rem]">
        &copy; 2023 Microsoft
      </div>
    </>
  );
}
