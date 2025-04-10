import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import React from "react";

function Events() {
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
          styles="top-[20vh] left-[26.5vw]"
        />
        <img
          className="absolute top-[32.5vh] w-[17.3vw] left-[48.5vw]"
          src="./events/line1.svg"
          alt=""
        />
        <EventCard
          title="Intech"
          date="Apr 15 - May 6"
          link="asdasd"
          styles="top-[64vh] right-[26.5vw]"
        />
        <img
          className="absolute top-[70.5vh] w-[17.3vw] right-[48.5vw]"
          src="./events/line2.svg"
          alt=""
        />
        <EventCard
          title="Robotronics"
          date="Coming Soon..."
          styles="top-[103vh] left-[26.5vw]"
        />
        <div className="absolute top-[128vh] left-[26.5vw] w-[22vw] h-[10vh] mb-[5vh]"></div>
      </div>
    </div>
  );
}

export default Events;
