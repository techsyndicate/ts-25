"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <div className="my-5 flex flex-row items-center justify-center gap-2">
      <div
        onClick={() => (window.location.href = "/")}
        className="border-2 border-[#363636] flex flex-row items-center justify-center px-20 py-2.5 rounded-lg gap-2 cursor-pointer"
      >
        <img src="./tsLogo.svg" alt="TS Logo" className="size-6" />
        <h1>Tech Syndicate</h1>
      </div>
      <div className="bg-[#191919] py-3 px-20 flex flex-row items-center justify-center rounded-lg">
        <div className="flex flex-row items-center justify-center gap-7">
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
