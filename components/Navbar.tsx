"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";

function Navbar() {
  const router = useRouter();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-[100vw] h-[14vh] flex flex-row items-center justify-center">
        <div className="w-[81vw] h-[7vh] flex flex-row items-center justify-between border-2 border-[rgba(255,255,255,0.17)] rounded-lg px-[4vw]">
          <div className="flex flex-row items-center">
            <img
              src="./tsLogo.svg"
              alt="TS Logo"
              className="size-[3vh] ml-[-1vw]"
            />
            <h1 className="ml-[2vw]">Tech Syndicate</h1>
          </div>
          <img
            src="./hamburger-menu.svg"
            className="w-[2vh] aspect-square"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <div className="my-[1.8vw] flex flex-row items-center justify-center gap-[0.7vw]">
      <div
        onClick={() => (window.location.href = "/")}
        className="border-2 border-[rgba(255,255,255,0.17)] flex flex-row items-center justify-center px-[5vw] py-[0.68vw] rounded-lg gap-[0.5vw] cursor-pointer"
      >
        <img src="./tsLogo.svg" alt="TS Logo" className="size-[1.5vw]" />
        <h1>Tech Syndicate</h1>
      </div>
      <div className="bg-[rgba(51,51,51,0.3)] bg- py-[1.8vh] px-[5vw] flex flex-row items-center justify-center rounded-lg">
        <div className="flex flex-row items-center justify-center gap-[2vw]">
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/learn");
            }}
          >
            Learn
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/about");
            }}
          >
            About
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/team");
            }}
          >
            Team
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/events");
            }}
          >
            Events
          </p>
          {/* <a href="/intech">inTech</a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
