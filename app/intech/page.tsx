"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

function IntechPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-[100vw] h-[100vh]">
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-[8vw]">
          <h1 className="text-[10.4vw]">
            inTech <span className="text-[#16e16e]">‘25</span>
          </h1>
          <div className="flex flex-row items-center justify-between mt-[3vw] gap-[2vw]">
            <button
              onClick={() => {
                window.open("https://ts46.club/server", "_blank");
              }}
              className="cursor-pointer mr-[0.75vw] bg-[#161c17] rounded-[100vw] w-[15vw] h-[15vw] flex items-center justify-center"
            >
              <Image
                src="/icons/discord.svg"
                alt=""
                className="w-[7vw] h-[7vw]"
                sizes="100vw"
                height={0}
                width={0}
              ></Image>
            </button>
            <button
              onClick={() => {
                window.open("https://intech.techsyndicate.us", "_blank");
              }}
              className="cursor-pointer bg-[#161c17] px-[7vw] h-[14vw] rounded-[100vw] flex items-center justify-between gap-[2vw]"
            >
              REGISTER
              <Image
                src="/rightArrow.png"
                className="text-[1.5vw] sm:h-[0.9vw] h-[3vw] w-[3.2vw] sm:w-[0.9vw]"
                alt=""
                sizes="100vw"
                height={0}
                width={0}
              ></Image>
            </button>
            <button
              onClick={() => {
                window.open("https://ts46.club/whatsapp", "_blank");
              }}
              className="cursor-pointer bg-[#161c17] rounded-[100vw] w-[15vw] h-[15vw] flex items-center justify-center"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt=""
                className="w-[7vw] h-[7vw]"
                sizes="100vw"
                height={0}
                width={0}
              ></Image>
            </button>
          </div>
          <p className="w-[75vw] text-center mt-[8vw] text-md">
            inTech '25, the seventh edition of our annual intra-school tech fest
            will take place from{" "}
            <span className="text-[#16e16e]">May 18 to June 5</span>. This year
            it shall comprise of{" "}
            <span className="text-[#16e16e]">21 events</span> across different
            domains in the field of technology. The most skilled students will
            be{" "}
            <span className="text-[#16e16e]">inducted into Tech Syndicate</span>
            , where they'll level up their skills and represent the school in
            various competitions.
          </p>
          <button
            className="mt-[8vw] text-[#ccc] text-[5vw] cursor-pointer"
            onClick={() => {
              window.open("https://ts46.club/guide", "_blank");
            }}
          >
            VIEW GUIDE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="z-[-1] w-[100vw] h-[100vh] flex items-center justify-center absolute top-0 left-0 flex-col">
        <h1 className="text-[3.4vw]">
          inTech <span className="text-[#16e16e]">‘25</span>
        </h1>
        <div className="flex justify-between mt-[1.5vw]">
          <button
            onClick={() => {
              window.open("https://intech.techsyndicate.us", "_blank");
            }}
            className="cursor-pointer bg-[#161c17] px-[3.5vw] h-[4vw] rounded-[100vw] flex items-center justify-between gap-[0.5vw] mr-[1.5vw]"
          >
            REGISTER
            <Image
              src="/rightArrow.png"
              className="text-[1.5vw] sm:h-[0.9vw] h-[3vw] w-[3.2vw] sm:w-[0.9vw]"
              alt=""
              sizes="100vw"
              height={0}
              width={0}
            ></Image>
          </button>
          <button
            onClick={() => {
              window.open("https://ts46.club/server", "_blank");
            }}
            className="cursor-pointer mr-[0.75vw] bg-[#161c17] rounded-[100vw] w-[4vw] flex items-center justify-center"
          >
            <Image
              src="/icons/discord.svg"
              alt=""
              className="w-[1.5vw] h-[1.5vw]"
              sizes="100vw"
              height={0}
              width={0}
            ></Image>
          </button>
          <button
            onClick={() => {
              window.open("https://ts46.club/whatsapp", "_blank");
            }}
            className="cursor-pointer bg-[#161c17] rounded-[100vw] w-[4vw] flex items-center justify-center"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt=""
              className="w-[1.5vw] h-[1.5vw]"
              sizes="100vw"
              height={0}
              width={0}
            ></Image>
          </button>
        </div>
        <p className="w-[45vw] text-center mt-[2vw] text-md">
          inTech '25, the seventh edition of our annual intra-school tech fest
          will take place from{" "}
          <span className="text-[#16e16e]">May 18 to June 5</span>. This year it
          shall comprise of <span className="text-[#16e16e]">21 events</span>{" "}
          across different domains in the field of technology. The most skilled
          students will be{" "}
          <span className="text-[#16e16e]">inducted into Tech Syndicate</span>,
          where they'll level up their skills and represent the school in
          various competitions.
        </p>
        <button
          className="mt-[1.5vw] text-[#ccc] text-md cursor-pointer"
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
        className="w-[100vw] h-[auto] transform-[scale(1.2)] fixed bottom-[-2vw] left-0 z-[-5]"
        sizes="100vw"
      ></Image>
    </div>
  );
}

export default IntechPage;
