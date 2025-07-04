"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import AlumniCardGrid from "@/components/AlumniCardGrid";
import { useRouter } from "next/navigation";
import Image from 'next/image'

interface AlumniMember {
  name: string;
  exrole: string;
  pfp: string;
  batch: string;
  status: string;
}

interface AlumniBatch {
  batch: string;
  alumni: AlumniMember[];
}

interface AlumniProps {
  members: AlumniBatch[];
}

function Alumni({ members }: AlumniProps) {
  const router = useRouter();

  return (
    <>
      <style>{`
        body {
          overflow-y: auto;
        }
      `}</style>
      <div className="overflow-y-auto no-scrollbar h-screen w-screen">
        <div className="flex items-center justify-center flex-col mb-[5vh]">
          <Navbar />
          <h2 className="text-[10vw] mt-[10vw] sm:mt-[4vw] sm:text-[3vw]">
            THE TEAM
          </h2>
          <button
            onClick={() => {
              router.push("/team");
            }}
            className="sm:text-[#777] text-[#fff] flex items-center sm:gap-[0.4vw] sm:text-[1.1vw] sm:cursor-pointer text-[5vw] gap-[2vw]"
          >
            MEMBERS{" "}
            <Image
              src="/rightArrow.png"
              className="sm:h-[0.9vw] h-[3vw] w-[3.1vw] sm:w-[0.9vw]"
              width={0}
              height={0}
              alt=""
              sizes="100vw"
            ></Image>
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
    </>
  );
}

export default Alumni;
