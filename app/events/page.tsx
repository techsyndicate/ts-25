"use client";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import MobileEventCard from "@/components/MobileEventCard";

function Events() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center overflow-visible ">
        <Navbar />
        <h1 className="text-[10vw]">EVENTS</h1>
        <p className="text-[rgba(255,255,255,0.65)] w-[60vw] text-center mt-[3vw]">
          Check out what’s happening at Tech Syndicate!
        </p>
        <div className="mt-[10vw] flex flex-col items-center justify-center overflow-scroll">
          <MobileEventCard title="Training Grounds" date="Apr 15 - May 6" />
          <img src="./events/mobile/line1.svg" alt="" />
          <MobileEventCard
            title="InTech"
            date="Apr 15 - May 6"
            link="asdasdasd"
          />
          <img src="./events/mobile/line2.svg" alt="" />
          <MobileEventCard title="Robotronics" date="Coming Soon..." />
          <div className="w-[100%] h-[12vw]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className=" h-max">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[3vw] font-light mt-[10vh]">EVENTS</h1>
        <p className="text-[1vw] font-light text-[rgba(255,255,255,0.65)] text-center w-[35vw] mt-[2vh]">
          I ain't worth it Lucy. Besides you, I got nothing left. But you still
          have a dream to stick around for. I need you to see it through. That's
          my dream. Honestly, nothing else ever really mattered.
        </p>
      </div>
      <div className="blobs relative mt-[-5vh]">
        <EventCard
          title="Training Grounds"
          date="Apr 15 - May 6"
          link="asdasd"
          styles="top-[9vw] left-[26.5vw]"
        />
        <img
          className="absolute top-[14.625vw] w-[17.3vw] left-[48.5vw]"
          src="./events/line1.svg"
          alt=""
        />
        <EventCard
          title="Intech"
          date="Apr 15 - May 6"
          link="asdasd"
          styles="top-[28.8vw] right-[26.5vw]"
        />
        <img
          className="absolute top-[31.725vw] w-[17.3vw] right-[48.5vw]"
          src="./events/line2.svg"
          alt=""
        />
        <EventCard
          title="Robotronics"
          date="Coming Soon..."
          styles="top-[46.36vw] left-[26.5vw]"
        />
        <div className="absolute top-[57.6vw] left-[26.5vw] w-[22vw] h-[4.5vw] mb-[2.5vw]"></div>
      </div>
    </div>
  );
}

export default Events;
