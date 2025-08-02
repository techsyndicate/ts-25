"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

function IntechPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <style>{`
        body {
          overflow-y: none;
        }
      `}</style>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-[5vh] lg:mt-0 sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
          <h1 className="text-[10.4vw] sm:text-[3.4vw]">
            Robotronics <span className="text-[#16e16e]">'25</span>
          </h1>
          <div className="flex flex-row items-center justify-center mt-[3vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.5vw]">
            <button
              onClick={() => {
                window.open("https://register.techsyndicate.us", "_blank");
              }}
              className="cursor-pointer bg-[#161c17] px-[7vw] sm:px-[3.5vw] h-[14vw] sm:h-[4vw] rounded-[100vw] flex items-center justify-between gap-[2vw] sm:gap-[0.5vw] mr-[0.75vw] sm:mr-[1.5vw]"
            >
              REGISTER
              <Image
                src="/rightArrow.png"
                className="text-[1.5vw] sm:h-[0.9vw] h-[3vw] w-[3.2vw] sm:w-[0.9vw]"
                alt=""
                sizes="100vw"
                height={0}
                width={0}
              />
            </button>
            <button
              onClick={() => {
                window.open("https://ts46.club/server", "_blank");
              }}
              className="cursor-pointer mr-[0.75vw] bg-[#161c17] rounded-[100vw] w-[15vw] sm:w-[4vw] h-[15vw] sm:h-[4vw] flex items-center justify-center"
            >
              <Image
                src="/icons/discord.svg"
                alt=""
                className="w-[7vw] sm:w-[1.5vw] h-[7vw] sm:h-[1.5vw]"
                sizes="100vw"
                height={0}
                width={0}
              />
            </button>
            <button
              onClick={() => {
                window.open("https://ts46.club/whatsapp", "_blank");
              }}
              className="cursor-pointer bg-[#161c17] rounded-[100vw] w-[15vw] sm:w-[4vw] h-[15vw] sm:h-[4vw] flex items-center justify-center"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt=""
                className="w-[7vw] sm:w-[1.5vw] h-[7vw] sm:h-[1.5vw]"
                sizes="100vw"
                height={0}
                width={0}
              />
            </button>
          </div>
          <p className="w-[75vw] sm:w-[45vw] text-center mt-[8vw] sm:mt-[2vw] text-[4vw] md:text-[1vw]">
            Robotronics '25, is the thirteenth edition of our annual inter-school tech fest
            will take place from{" "}
            <span className="text-[#16e16e]">August 8, 2025 to August 19, 2025</span>. This year it
            shall comprise of <span className="text-[#16e16e]">16 events</span>{" "}
            across different domains in the field of technology. There will be one
            school crowned as {" "}
            <span className="text-[#16e16e]">the overall winner</span>,
            after taking into consideration all events.
          </p>
          <button
            className="mt-[5vw] lg:mt-[1vw] text-[#ccc] text-[5vw] md:text-[1vw] cursor-pointer"
            onClick={() => {
              window.open("https://ts46.club/guide", "_blank");
            }}
          >
            VIEW GUIDE
          </button>
        </div>
        <Image
          alt=""
          src="/icons/intech_banner.png"
          width={0}
          height={0}
          className="w-[100vw] h-[auto] transform-[scale(1.2)] fixed bottom-[-2vw] left-0 z-[-5] hidden sm:block"
          sizes="100vw"
        />
      </div>
    </>
  );
}

export default IntechPage;
