"use client";
import React, { ReactEventHandler } from "react";
import { useRouter } from "next/navigation";
import ResourceCard from "@/components/ResourceCard";
import Navbar from "@/components/Navbar";

function ResourcesPage() {
  const router = useRouter();
  return (
    <div className="overflow-y-auto no-scrollbar h-screen w-screen">
      <Navbar />
      <h1 className="text-3xl font-medium text-center mt-[15vh] ">
        LEARNING RESOURCES
      </h1>
      <p className="w-[30vw] text-center ml-[35vw] text-[#aaa] text-sm mt-[3vh]">
        Lorem Ipsum is simply dummy text of the printing typesetting industry.
        Lorem Ipsum has been the industry.
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            router.push("/");
          }}
          className="bg-[#161c17] px-[4vw] py-[2vh] rounded-[100vw] mt-[4.2vh] flex items-center gap-[0.4vw] text-[1.1vw]"
        >
          NOTION <img src="/rightArrow.png" className="h-[0.9vw]"></img>
        </button>
      </div>

      <div className="w-[75vw] relative mx-[12.5vw] mt-[10vh]">
        <img
          src="/waves.png"
          className="w-[5vw] h-[2.2vw] absolute top-[-0.8vw] left-[26.5vw] z-20"
        ></img>

        <img
          src="/3d_cuboids.png"
          className="w-[18vw] h-[17vw] z-50 absolute top-[11vw] left-[9vw] [clip-path:polygon(0%_29.41177%,100%_29.41177%,100%_100%,0%_100%)]"
        ></img>

        <img
          src="/web_dev_circle.png"
          className="w-[10vw] left-[40vw] top-[20vw] z-50 absolute [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)]"
        ></img>

        <img src="/ctf_flag.png" className="absolute h-[7.5vw] top-[38.5vw] z-50 left-[70vw]"></img>

        <ResourceCard
          width="w-[30vw]"
          height="h-[15vw]"
          link="/"
          title="App Development"
          body="Mobile app development is, quite simply, the process of developing apps..."
          top="top-0"
          left="left-0"
          bgcolor="bg-[#16181c]"
          color="text-white"
          knowMoreColor="text-[#ffc863]"
        ></ResourceCard>

        <ResourceCard
          width="w-[20vw]"
          height="h-[25vw]"
          link="/"
          title="Website Development"
          body="Web development essentially consists of two paradigms: frontend and backend development..."
          top="top-0"
          left="left-[31vw]"
          bgcolor="bg-[#5773ee]"
          color="text-white"
          knowMoreColor="text-white"
        ></ResourceCard>

        <ResourceCard
          width="w-[23vw]"
          height="h-[25vw]"
          link="/"
          title="2D Design"
          body="Design is something that involves thorough planning as well as ideation of the way your product..."
          top="top-0"
          left="left-[52vw]"
          bgcolor="bg-white"
          color="text-black"
          knowMoreColor="text-black"
          banner="/2d_design_banner.png"
        ></ResourceCard>

        <ResourceCard
          width="w-[30vw]"
          height="h-[27vw]"
          link="/"
          title="3D Design"
          body="3D modelling is a vast field from low poly designs to realistically detailed environments..."
          top="top-[16vw]"
          left="left-0"
          bgcolor="bg-[#8151ff]"
          color="text-white"
          additionalHeading="mt-[10vw]"
          knowMoreColor="text-orange"
        ></ResourceCard>

        <ResourceCard
          width="w-[25vw]"
          height="h-[17vw]"
          title="A/V Editing"
          body="3D modelling is a vast field from low poly designs to realistically detailed environments..."
          top="top-[26vw]"
          left="left-[31vw]"
          bgcolor="bg-[#16181c]"
          color="text-white"
        ></ResourceCard>

        <ResourceCard
          width="w-[18vw]"
          height="h-[20vw]"
          title="CTF"
          body="Capture the flag challenges are cyber security exercises where flags..."
          top="top-[26vw]"
          left="left-[57vw]"
          bgcolor="bg-[#be3144]"
          color="text-white"
          link="/"
          knowMoreColor="pt-[1vw]"
        ></ResourceCard>
      </div>
    </div>
  );
}

export default ResourcesPage;
