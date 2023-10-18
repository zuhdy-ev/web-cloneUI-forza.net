"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logoForza from "@/public/assets/Nav/logoForzaNav.png";

// const subMenuSupport = [
//   { label: "Report a Bug", color: "#FF7F00" },
//   { label: "Get Help", color: "#FF7F00" },
//   { label: "Make a Suggestion", color: "#FF7F00" },
// ];

// const subMenuGetTheGames = [
//   { label: "Get Forza Motorsport", color: "#FDB62E" },
//   { label: "Get Horizon 5", color: "#E23A7F" },
//   { label: "Get Horizon 4", color: "#E23A7F" },
// ];

export default function Navbar(condition) {
  
  const menu = [
    { label: "News" },
    { label: "Motorsport" },
    { label: "Horizon" },
    { label: "Community" },
    { label: "Forums" },
  ];

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 85) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <>
      <div className="z-[999] relative">
        {/* @Main Navbar */}
        <div className={`fixed ${color ? 'bg-black opacity-70 pb-2' : 'bg-transparent'} bg-black w-full h-[85px] flex justify-center items-center drop-shadow-lg overflow-hidden duration-300`}>
          {/* --- Content --- */}
          <div className="w-[90%] md:w-[95%] h-[85%] flex justify-between items-center">
            {/* Right */}
            <div className="hover:opacity-70 duration-200 w-40">
              <Link href={`/beranda`}>
                <Image
                  src={logoForza}
                  width={130}
                  height={20}
                  alt="Logo Forza"
                  className="bg-transparent"
                />
              </Link>
            </div>

            {/* Left */}
            <div className="flex">
              <div className="flex">
                {menu.map(({ label }) => (
                  <div key={label}>
                    <button className="text-white px-5 py-1 text-[0.85rem] group">
                      {label}
                      <hr className="mt-[0.15rem] duration-300 w-0 group-hover:w-full" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="relative flex text-white">
                <div className="cursor-pointer flex flex-col group">
                  <div className="flex px-3 py-1 text-[0.85rem] bg-white text-black group-hover:text-white rounded-sm mx-2 duration-300 group-hover:border-[#cc0000] group-hover:bg-[#CC0000] items-center justify-center border border-white">
                    <div className="w-[80%] h-full">Support</div>
                    <div className="group-hover:rotate-90 duration-300 w-[20%] h-full flex items-center justify-center ml-2">
                      <Image
                        src="/assets/Nav/nav-arrow.png"
                        alt="Arrow"
                        width={0}
                        height={0}
                        className="w-auto h-[0.6rem] block group-hover:hidden"
                      />
                      <Image
                        src="/assets/Nav/nav-arrow-white.png"
                        alt="Arrow"
                        width={0}
                        height={0}
                        className="w-auto h-[0.6rem] hidden group-hover:block"
                      />
                    </div>
                  </div>
                  {/* <div className="absolute hidden group-hover:block duration-1000">
                    <div className="">Report a Bug</div>
                    <div className="">Get Help</div>
                    <div className="">Make a Suggestion</div>
                  </div> */}
                </div>
                <div className="cursor-pointer w-[9rem] px-2 py-1 text-[0.85rem] bg-white text-black hover:text-white rounded-sm mx-2 duration-300 hover:border-[#CC0000] hover:bg-[#CC0000] relative flex items-center justify-center group">
                  <div className="h-full">Get the Games</div>
                  <div className="group-hover:rotate-90 relative duration-300 h-full flex items-center justify-center ml-2">
                    <Image
                      src="/assets/Nav/nav-arrow.png"
                      alt="Arrow"
                      width={0}
                      height={0}
                      className="w-auto h-[0.6rem] block group-hover:hidden"
                    />
                    <Image
                      src="/assets/Nav/nav-arrow-white.png"
                      alt="Arrow"
                      width={0}
                      height={0}
                      className="w-auto h-[0.6rem] hidden group-hover:block"
                    />
                  </div>
                </div>
              </div>
              <button className="flex text-white px-3 py-1 mx-2 text-[0.85rem] border border-white duration-300 hover:border-[#CC0000] hover:bg-[#CC0000] rounded-sm">
                My Forza
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
