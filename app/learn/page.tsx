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

      <div className="w-[75vw] relative mx-[12.5vw] mt-[10vh] mb-[5vw]">
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

        <img
          src="/ctf_flag.png"
          className="absolute h-[7.5vw] top-[38.5vw] z-50 left-[70vw]"
        ></img>

        <img
          src="/quiz_illustration.png"
          className="absolute w-[6vw] top-[47vw] z-50 left-[47vw]"
        ></img>

        <img
          src="/quiz_illustration.png"
          className="absolute w-[6vw] top-[47vw] z-50 left-[47vw]"
        ></img>

        <img
          src="/learn/cross_illustration.svg"
          className="absolute w-[9vw] top-[54vw] z-50 left-[69vw]"
        ></img>

        <img
          src="/learn/cryptic_illustration.svg"
          className="absolute w-[10vw] top-[78vw] z-50 left-[41vw]"
        ></img>

        <img
          src="/learn/tool_illustration.svg"
          className="absolute w-[7vw] top-[68.5vw] z-50 left-[68.5vw]"
        ></img>

        <img
          src="/learn/gear_illustration.svg"
          className="absolute w-[7vw] top-[79vw] z-50 left-[69vw]"
        ></img>

        <img
          src="/learn/photo_illustration.svg"
          className="absolute w-[7vw] top-[92.5vw] z-50 left-[15vw]"
        ></img>

        <img
          src="/learn/prog_illustration.svg"
          className="absolute w-[14vw] top-[87.25vw] z-50 left-[60vw]"
        ></img>

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
          additionalHeading="text-black"
        ></ResourceCard>

        <ResourceCard
          width="w-[30vw]"
          height="h-[30vw]"
          link="/"
          title="3D Design"
          body="3D modelling is a vast field from low poly designs to realistically detailed environments..."
          top="top-[16vw]"
          left="left-0"
          bgcolor="bg-[#8151ff]"
          color="text-white"
          additionalHeading="mt-[10vw]"
          knowMoreColor="text-orange pt-[1vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[25vw]"
          height="h-[20vw]"
          title="A/V Editing"
          body="A/V can be categorized following types: Films, Motion Graphics, Animation, Videos..."
          top="top-[26vw]"
          left="left-[31vw]"
          bgcolor="bg-[#16181c]"
          color="text-white"
          link="/"
          knowMoreColor="text-[#6C57EE] pt-[1vw]"
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

        <ResourceCard
          width="w-[25vw]"
          height="h-[28vw]"
          title="Group Discussion"
          body="Group discussion consists of a group of individuals having an intellectual discussion..."
          top="top-[47vw]"
          left="left-0"
          bgcolor="bg-[#16181c]"
          color="text-white"
          link="/"
          knowMoreColor="text-[#EE9657]"
          banner="/gd_banner.png"
          additionalHeading="mt-[5.5vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[27vw]"
          height="h-[18vw]"
          title="Quiz"
          body="Quizzing is one of the most challenging events in any tech competition. It aims at testing..."
          top="top-[47vw]"
          left="left-[26vw]"
          bgcolor="bg-[#319CBE]"
          color="text-white w-[18vw]"
          link="/"
          knowMoreColor="pt-[1vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[21vw]"
          height="h-[20.6vw]"
          title="Crossword"
          body="Crossword is one of the most fun events that you’ll ever come across. It doesn’t require..."
          top="top-[47vw]"
          left="left-[54vw]"
          bgcolor="bg-[#16181C]"
          color="text-white w-[11vw]"
          link="/"
          knowMoreColor="text-[#7EEE57] mt-[2vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[27vw]"
          height="h-[20vw]"
          title="Cryptic Hunts"
          body="Cryptic hunts basically refer to scavenger hunts that are carried out over the internet..."
          top="top-[66vw]"
          left="left-[26vw]"
          bgcolor="bg-[#BE7531]"
          color="text-white w-[15vw] mt-[1.5vw]"
          link="/"
          knowMoreColor="text-[rgba(255,255,255,0.8)] mt-[1.5vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[21vw]"
          height="h-[17.5vw]"
          title="Hardware"
          body="Hardware is the part of a computer that is designed to perform a specific task..."
          top="top-[68.5vw]"
          left="left-[54vw]"
          bgcolor="bg-[#16181C]"
          color="text-white w-[14vw] mt-[0vw]"
          link="/"
          knowMoreColor="text-[#5793EE] mt-[1.9vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[25vw]"
          height="h-[22vw]"
          title="Photography"
          body="Photography is the art, application, and practice of creating durable images..."
          top="top-[76vw]"
          left="left-0"
          bgcolor="bg-[#31BEA5]"
          color="text-white mt-[2vw] w-[18vw]"
          link="/"
          knowMoreColor="text-[rgba(255,255,255,0.8)] mt-[4vw]"
        ></ResourceCard>

        <ResourceCard
          width="w-[49vw]"
          height="h-[11vw]"
          title="Programming"
          body="Programming is A Very Fun Mind Sport, As the name says..."
          top="top-[87vw]"
          left="left-[26vw]"
          bgcolor="bg-[#16181C]"
          color="text-white w-[45vw]"
          link="/"
          knowMoreColor="text-[#EE5784]"
          additional="p-[2vw] mb-[4vw]"
        ></ResourceCard>

        <div className="absolute top-[98vw] w-[10vw] h-[4vw]"></div>
      </div>
    </div>
  );
}

export default ResourcesPage;
