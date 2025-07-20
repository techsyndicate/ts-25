import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  link?: string;
  styles?: string;
}

function EventCard(props: EventCardProps) {
  return (
    <div
      className={`absolute w-[22vw] rounded-lg bg-[#191919] ${props.styles} py-[1.875vw] pl-[1.875vw]`}
    >
      <h1 className="text-[1.7vw] font-medium">{props.title}</h1>
      {props.date === "May 18 - Jun 5" ? (
        <p className="text-[1.4vw] text-[rgba(255,255,255,0.6)]">
          {props.date}
        </p>
      ) : (
        <p className="text-[1.4vw] text-[#16e16e]">{props.date}</p>
      )}
      {props.link && (
        <button
          className="bg-[rgb(22,225,110)] text-[1.4vw] text-black outline-none border-none rounded-md cursor-pointer px-[2.5vw] py-[1vh] mt-[2vh]"
          style={{
            boxShadow:
              "0 14px 28px rgba(22,225,110,0.25), 0 5px 10px rgba(22,225,110,0.22)",
          }}
          onClick={() => {window.open(props.link || 'https://techsyndicate.us', '_blank')}}
        >
          Join
        </button>
      )}
    </div>
  );
}

export default EventCard;
