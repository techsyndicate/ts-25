import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  link?: string;
  styles?: string;
}

function MobileEventCard(props: EventCardProps) {
  return (
    <div className="w-[60vw] h-[32.4vw] bg-[#191919] p-[3.5vw] rounded-lg">
      <h1 className="text-[5.5vw] font-medium">{props.title}</h1>
      {props.date === "Coming Soon..." ? (
        <p className="text-[rgba(255,255,255,0.6)]">{props.date}</p>
      ) : (
        <p className="text-[#16e16e]">{props.date}</p>
      )}
      {props.link && (
        <button
          onClick={() => window.open(props.link || 'https://techsyndicate.us', '_blank')}
          className="bg-[rgb(22,225,110)] text-black outline-none border-none rounded-md cursor-pointer px-[4vw] py-[1.5vw] mt-[2.25vw]"
          style={{
            boxShadow:
              "0 14px 28px rgba(22,225,110,0.25), 0 5px 10px rgba(22,225,110,0.22)",
          }}
        >
          Join
        </button>
      )}
    </div>
  );
}

export default MobileEventCard;
