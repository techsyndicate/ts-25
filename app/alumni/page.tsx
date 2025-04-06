"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import AlumniCardGrid from "@/components/AlumniCardGrid";
import members from "@/data/alumni.json";
import { useRouter } from "next/navigation";

function Alumni() {
  let x = "";
  const router = useRouter();
  return (
    <div className="overflow-y-auto no-scrollbar h-screen w-screen">
      <div className="flex items-center justify-center flex-col mb-[5vh]">
        <Navbar />
        <h2 className="text-[3vw] mt-[4vw]">THE TEAM</h2>
        <button
          onClick={() => {
            router.push("/team");
          }}
          className="text-[#777] flex items-center gap-[0.4vw] text-[1.1vw] cursor-pointer"
        >
          MEMBERS <img src="/rightArrow.png" className="h-[0.9vw]"></img>
        </button>

        {members.map((member, index) => (
          <AlumniCardGrid
            batch={member.batch}
            alumnus={member.alumni}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Alumni;
