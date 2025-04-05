"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <div className="my-[1.2vw] flex flex-row items-center justify-center gap-[0.7vw]">
      <div
        onClick={() => (window.location.href = "/")}
        className="border-2 border-[#363636] flex flex-row items-center justify-center px-[6vw] py-[0.68vw] rounded-lg gap-[0.5vw] cursor-pointer"
      >
        <img src="./tsLogo.svg" alt="TS Logo" className="size-[1.5vw]" />
        <h1>Tech Syndicate</h1>
      </div>
      <div className="bg-[#191919] py-[1.8vh] px-[5vw] flex flex-row items-center justify-center rounded-lg">
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
