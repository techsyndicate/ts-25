"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import MemberCard from "@/components/MemberCard";
import members from "@/data/members.json";
import { useRouter } from "next/navigation";

function Team() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <h2 className="text-[3vw] mt-[4vw]">THE TEAM</h2>
      <button
        onClick={() => {
          router.push("/alumni");
        }}
        className="text-[#777] flex items-center gap-[0.4vw] text-[1.1vw] cursor-pointer"
      >
        ALUMNI <img src="/rightArrow.png" className="h-[0.9vw]"></img>
      </button>
      <div className="w-[80vw] flex flex-row items-center justify-center flex-wrap mt-[5vh] mb-[8vh] gap-[3vw] wrap-anywhere">
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
  );
}

export default Team;
