"use client";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import MobileEventCard from "@/components/MobileEventCard";
import Loader from "@/components/Loader";

function Events() {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isMobile) {
    return (
      <>
        <style>{`
        body {
          overflow-y: auto;
        }
      `}</style>
        <div className="flex flex-col items-center justify-center overflow-visible ">
          <Navbar />
          <h1 className="text-[10vw]">EVENTS</h1>
          <p className="text-[rgba(255,255,255,0.65)] w-[75vw] text-center mt-[5vw]">
            A timeline showcasing the different events and activities organized
            by Tech Syndicate over the academic year.
          </p>
          <div className="mt-[10vw] flex flex-col items-center justify-center overflow-scroll">
            <MobileEventCard
              title="inTech"
              date="May 18 - Jun 5"
              link="/intech"
            />
            <img src="./events/mobile/line2.svg" alt="" />
            <MobileEventCard title="Robotronics" date="Coming Soon..." />
            <div className="w-[100%] h-[12vw]"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <style>{`
        body {
          overflow-y: auto;
        }
      `}</style>
        <div className=" h-max">
          <Navbar />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[3vw] font-light mt-[10vh]">EVENTS</h1>
            <p className="text-[1vw] font-light text-[rgba(255,255,255,0.65)] text-center w-[35vw] mt-[2vh]">
              A timeline showcasing the different events and activities
              organized by Tech Syndicate over the academic year.
            </p>
          </div>
          <div className="blobs relative mt-[-5vh]">
            <EventCard
              title="inTech"
              date="May 18 - Jun 5"
              styles="top-[9vw] left-[26.5vw]"
              link="/intech"
            />
            <img
              className="absolute top-[14.625vw] w-[17.3vw] left-[48.5vw]"
              src="./events/line1.svg"
              alt=""
            />
            <EventCard
              title="Robotronics"
              date="Coming Soon..."
              styles="top-[28.8vw] right-[26.5vw]"
            />
            <div className="absolute top-[37.6vw] left-[26.5vw] w-[22vw] h-[4.5vw] mb-[2.5vw]"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Events;
