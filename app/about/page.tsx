import React from "react";
import Navbar from "@/components/Navbar";

function About() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-[80vw] h-screen border-r border-l border-dashed border-[#565656] flex flex-col items-center justify-between pt-0.5">
        <Navbar />
        <div className="w-[100vw] h-[75vh] border-t border-b border-dashed border-[#565656] flex flex-row mb-20">
          <div className="border-r border-dashed border-[#565656] w-[55%] h-[100%] flex flex-col">
            <div className="w-[100%] h-[75%] border-b border-dashed border-[#565656] flex flex-col items-start justify-end p-5">
              <h1 className="text-6xl font-regular ml-40">ABOUT THE CLUB</h1>
            </div>
            <div className="w-[100%] h-[50%] flex flex-col ml-40 items-start justify-start p-5">
              <p className="w-[65%] text-[1.4rem]">
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
            <img src="/about.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
