"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import menu1 from "@/public/assets/Menu/menu-1.webp";
// import menu2 from "@/public/assets/Menu/menu-2.webp";
// import menu3 from "@/public/assets/Menu/menu-3.webp";
// import menu4 from "@/public/assets/Menu/menu-4.webp";

import arrowWhite from "@/public/assets/Nav/nav-arrow-white.png";

export default function Menu() {
  const MenuItems = [
    {
      id: 1,
      category: ["All", "Motorsport"],
      image: (
        <Image
          src="/assets/Menu/menu-1.png"
          alt="Menu 1"
          width={500}
          height={281}
          className="transition-transform transform duration-1000 scale-100 group-hover:scale-110 object-cover object-center w-full h-full"
        />
      ),
      date: "14 October 2023",
      title: "FORZA MOTORSPORT COMMUNITY UPDATE",
      desc: "An update to our Forza Motorsport community",
    },
    {
      id: 2,
      category: ["All", "Horizon"],
      image: (
        <Image
          src="/assets/Menu/menu-2.png"
          width={500}
          height={281}
          className="transition-transform transform duration-1000 scale-100 group-hover:scale-110 object-cover object-center w-full h-full"
        />
      ),
      date: "7 October 2023",
      title: "CELEBRATE DÍA DE MUERTOS HORIZON STYLE",
      desc: "Cempasúchil and calaveritas take over the Horizon Festival as Dia de Muertos arrives to Forza Horizon 5.",
    },
    {
      id: 3,
      category: ["All", "Gameplay"],
      image: (
        <Image
          src="/assets/Menu/menu-3.png"
          width={500}
          height={281}
          className="transition-transform transform duration-1000 scale-100 group-hover:scale-110 object-cover object-center w-full h-full"
        />
      ),
      date: "14 June 2023",
      title: "DISCOVER FORZA MOTORSPORT’S NEW CAR BUILDING CAREER",
      desc: "Forza Motorsport introduces the Builders Cup Career Mode, a new car building focused single-player experience.",
    },
    {
      id: 4,
      category: ["All", "Community"],
      image: (
        <Image
          src="/assets/Menu/menu-4.png"
          width={500}
          height={281}
          className="transition-transform transform duration-1000 scale-100 group-hover:scale-110 object-cover object-center w-full h-full"
        />
      ),
      date: "18 October 2023",
      title: "Forza Motorsport Update 1.0 Release Notes – October 17, 2023",
      desc: "We're working to improve your Forza Motorsport experience. Below you will find a summary of items fixed or improved upon in Update 1.0.",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[33rem] flex items-center justify-center  bg-[#1d1d1d]">
        <div className="h-auto w-[75%] ">
          <div className="w-full h-16 flex ">
            <div
              className="h-full w-2/5 flex items-center justify-start  text-white font-acumin-black text-[3rem]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              FEATURED EVENETS
            </div>
            <div
              className="h-full w-3/5 flex items-center justify-end  text-white gap-8 text-[0.8rem]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <button>All</button>
              <button>Community</button>
              <button>Horizon</button>
              <button>Motorsport</button>
              <button>Gameplay</button>
            </div>
          </div>
          <div className="w-full h-[25rem] py-3 flex items-center">
            {MenuItems.map((item) => (
              <>
                <div
                  className="w-[18rem] h-[23rem] flex  group overflow-hidden cursor-pointer mx-3"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="100"
                >
                  <div
                    className={`w-[0.5rem] h-full bg-[#fdb62e] rounded-tl-sm rounded-bl-sm`}
                  ></div>
                  <div
                    className="flex flex-col w-full h-full rounded-tr-none rounded-br-3xl bg-[#333333]"
                    key={item.id}
                  >
                    <div className=" w-full h-[40%] rounded-tr-none group overflow-hidden">
                      {item.image}
                    </div>
                    <div className=" w-full h-[50%] rounded-br-3xl p-5">
                      <div className="text-[#838383] text-[0.8rem]">
                        {item.date}
                      </div>
                      <div className="text-white font-acumin-black text-[1rem]">
                        {item.title}
                      </div>
                      <div className="text-[#838383] text-[0.8rem]">
                        {item.desc}
                      </div>
                    </div>
                    <div className="text-white h-[10%] text-[0.8rem] px-5 flex items-center justify-start">
                      <div>View Article</div>
                      <span className="pl-5 group-hover:pl-7 duration-1000">
                        <Image
                          src={arrowWhite}
                          width={5}
                          height={5}
                          alt="arrow"
                          className=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <button className="text-white font-acumin-black w-full h-10 flex items-center justify-end -translate-x-10 group">More News <span className="translate-x-5 group-hover:translate-x-7 duration-500">{`>>>`}</span></button>
        </div>
      </div>
    </>
  );
}
