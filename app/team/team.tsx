"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import MemberCard from "@/components/MemberCard";
import members from "@/data/members.json";
import { useRouter } from "next/navigation";

function Team() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="overflow-y-auto no-scrollbar h-screen w-screen">
      <div className="flex items-center justify-center flex-col mb-[5vh]">
        <Navbar />
        <h2 className="text-[10vw] mt-[10vw] sm:mt-[4vw] sm:text-[3vw]">
          THE TEAM
        </h2>
        <button
          onClick={() => {
            router.push("/alumni");
          }}
          className="sm:text-[#777] text-[#fff] flex items-center sm:gap-[0.4vw] sm:text-[1.1vw] sm:cursor-pointer text-[5vw] gap-[2vw]"
        >
          ALUMNI{" "}
          <img src="/rightArrow.png" className="sm:h-[0.9vw] h-[4vw]"></img>
        </button>
        <div className="sm:w-[90vw] sm:gap-[6vw] flex sm:flex-row flex-col items-center justify-center sm:flex-wrap mt-[5vh] mb-[8vh] gap-[3vw] sm:wrap-anywhere">
          {members.map((member, index) => (
            <MemberCard
              name={member.name}
              title={member.role}
              image={member.pfp}
              socialIcons={member.socials}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
