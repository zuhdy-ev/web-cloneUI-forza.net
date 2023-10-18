import React from "react";
import Image from "next/image";

import imgDev from "@/public/assets/DevelopersTeam/imgDev.webp";
import logoTurn10Studios from "@/public/assets/DevelopersTeam/logoTurn10Studios.svg";
import logoPlaygroundGames from "@/public/assets/DevelopersTeam/logoPlaygroundGames.svg";

export default function DevelopersTeam() {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="w-full h-[68vh]">
          <Image
            src={imgDev}
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-screen flex flex-col items-center bg-[#1d1d1d]">
          <div className="w-[74%] h-full translate-y-[-13rem]">
            <div className="font-acumin-black text-white text-[3rem] leading-[2.7rem]">
              THE TEAMS BEHIND <br />
              THE WHEELS
            </div>
            <div className="flex text-black gap-5 mt-5 items-center">
              <div className="w-[34.5rem] h-56 flex bg-white rounded-sm rounded-br-2xl">
                <div className="w-[45rem] h-full flex items-center justify-center">
                  <Image
                    src={logoTurn10Studios}
                    width={0}
                    height={0}
                    className="w-[63%] h-full translate-y-[-15%]"
                  />
                </div>
                <div className="px-5 py-8 flex flex-col items-start justify-center">
                  <div className="font-acumin-black text-[1.6rem]">
                    TURN 10 STUDIOS
                  </div>
                  <div className="font-segoeUI text-[0.75rem] my-4">
                    Creators of the award-winning Forza franchise, Turn 10
                    Studios, located in Redmond, Washington, brings players and
                    automotive culture together. Thanks to your passion for
                    cars, gaming, and community we create cutting-edge driving
                    experiences to connect players and celebrate automotive
                    culture.
                  </div>
                  <button className="flex group">
                    <div className="font-segoeUI-bold text-[0.8rem]">
                      Visit Site
                    </div>
                    <div className="font-segoeUI-bold text-[0.8rem] ml-5 group-hover:ml-7 duration-[800ms]">
                      (arrow)
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[34.5rem] h-56 flex border bg-white rounded-sm rounded-br-2xl">
                <div className="w-[45rem] h-full border flex items-center justify-center">
                  <Image
                    src={logoPlaygroundGames}
                    width={0}
                    height={0}
                    className="w-[63%] h-full translate-y-[-15%]"
                  />
                </div>
                <div className="px-5 py-8 flex flex-col items-start justify-center">
                  <div className="font-acumin-black text-[1.6rem]">
                    PLAYGROUND GAMES
                  </div>
                  <div className="font-segoeUI text-[0.75rem] my-4">
                    Established in 2010 by some of the most experienced and
                    talented developers in the UK game industry with a mission
                    to make genre-defining video games for a global audience,
                    Playground Games, located in Leamington Spa, UK, are the
                    creators and developers of the award-winning Forza Horizon
                    series.
                  </div>
                  <button className="flex group">
                    <div className="font-segoeUI-bold text-[0.8rem]">
                      Visit Site
                    </div>
                    <div className="font-segoeUI-bold text-[0.8rem] ml-5 group-hover:ml-7 duration-[800ms]">
                      (arrow)
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
