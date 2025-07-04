"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { useIsMobile } from "@/hooks/useIsMobile";

function About() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full h-screen overflow-y-auto">
        <Navbar />
        <img src="/about/about.svg" className="w-full mt-[7vw]" alt="" />
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-center h-screen w-screen overflow-hidden">
      <div className="w-[80vw] h-screen border-r border-l border-[#565656] flex flex-col items-center justify-between">
        <div>
          <Navbar />
        </div>
        <div className="w-[100vw] h-[75vh] border-t border-b border-[#565656] flex flex-row mb-[4.5vw]">
          <div className="border-r border-[#565656] w-[55%] h-[100%] flex flex-col">
            <div className="w-[100%] h-[75%] border-b border-[#565656] flex flex-col items-start justify-end p-[1.2vw]">
              <h1 className="text-[4vw] font-regular ml-[10.5vw]">
                ABOUT THE CLUB
              </h1>
            </div>
            <div className="w-[100%] h-[50%] flex flex-col ml-[10.5vw] items-start justify-start p-[1.2vw]">
              <p className="w-[65%] text-[1.4vw]">
                Established in <span className="text-[#16e16e]">2016</span>,
                Tech Syndicate is the technology club of{" "}
                <span className="text-[#16e16e]">
                  Amity International School, Sector-46, Gurgaon
                </span>
                . The club works constantly to encourage students to learn new
                technologies and keep up with the rapidly progressing sector of{" "}
                <span className="text-[#16e16e]">computer science</span>.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[35%] h-[100%]">
            <img
              src="/about/about_illustration.svg"
              alt=""
              className="w-[45vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
