"use client";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import MobileEventCard from "@/components/MobileEventCard";

function Events() {
  const isMobile = useIsMobile();

  return (
    <>
      <style>{`
        body {
          overflow-y: auto;
        }
      `}</style>
      <div className="h-max">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[10vw] md:text-[3vw] font-light mt-[5vh] md:mt-[10vh]">EVENTS</h1>
          <p className="text-[4vw] md:text-[1vw] font-light text-[rgba(255,255,255,0.65)] text-center w-[75vw] md:w-[35vw] mt-[5vw] md:mt-[2vh]">
            A timeline showcasing the different events and activities
            organized by Tech Syndicate over the academic year.
          </p>
        </div>
        <div className="mt-[10vw] md:mt-[-5vh] flex flex-col items-center justify-center md:block md:relative blobs">
          {isMobile ? (
            <>
              <MobileEventCard title="InTech" date="May 18 - Jun 5" />
              <img src="./events/mobile/line2.svg" alt="" />
              <MobileEventCard title="Robotronics" date="Aug 8 - Aug 20" link="/robotronics" />
              <div className="w-[100%] h-[12vw]"></div>
            </>
          ) : (
            <>
              <EventCard
                title="InTech"
                date="May 18 - Jun 5"
                styles="top-[9vw] left-[26.5vw]"
              />
              <img
                className="absolute top-[14.625vw] w-[17.3vw] left-[48.5vw]"
                src="./events/line1.svg"
                alt=""
              />
              <EventCard
                title="Robotronics"
                date="Aug 8 - Aug 20"
                styles="top-[28.8vw] right-[26.5vw]"
                link='/robotronics'
              />
              <div className="absolute top-[37.6vw] left-[26.5vw] w-[22vw] h-[4.5vw] mt-[2.5vw]"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Events;
