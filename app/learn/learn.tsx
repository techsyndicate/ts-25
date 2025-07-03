"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import ResourceCard from "@/components/ResourceCard";
import ResourceCardMobile from "@/components/ResourceCardMobile";
import { useIsMobile } from "@/hooks/useIsMobile";

function ResourcesPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-[100vw] h-[100vh] overflow-scroll bg-[#000]">
        <Navbar />
        <div className="w-[100%] h-[100%] flex flex-col items-center ">
          <h1 className="text-[7vw] text-center font-light">
            LEARNING RESOURCES
          </h1>
          <p className="text-[rgba(255,255,255,0.65)] text-center w-[50vw] mt-[3vw] font-light">
            Get access to high quality Learning Material
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                window.open(
                  "https://techsyndicate.notion.site/Learning-Resources-11076be83f5e4456a105af9f2394b8b5",
                  "_blank",
                  "noopener, noreferrer"
                );
              }}
              className="bg-[#161c17] cursor-pointer px-[15vw] py-[4vw] rounded-[100vw] mt-[4.2vh] flex items-center gap-[0.4vw]"
            >
              NOTION <img src="/rightArrow.png" className="h-[3vw]"></img>
            </button>
          </div>
          <div className="mt-[10vw] flex flex-col items-center justify-center gap-[5vw]">
            <div className="relative">
              <img
                src="/learn/waves.png"
                className="w-[7.5vw] absolute right-[-1.5vw] top-[-1.5vw]"
                alt=""
              />
              <ResourceCardMobile
                bgcolor="bg-[#16181c]"
                color="text-[rgba(255,255,255,0.65)]"
                title="App Development"
                body="Mobile app development is, quite simply, the process of developing apps..."
                link="https://www.notion.so/techsyndicate/App-Development-3eeb461d6dea4c919dfec2179b7bced0?pvs=25"
                knowMoreColor="text-[#FFC863]"
              />
            </div>
            <div className="relative">
              <img
                src="/learn/illustrations/web_dev_circle.png"
                className="w-[20vw] absolute right-[5vw] bottom-[-10vw] [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)]"
                alt=""
              />
              <ResourceCardMobile
                bgcolor="bg-[#5773EE]"
                color="text-[rgba(255,255,255,0.65)]"
                title="Web Development"
                body="Web development essentially consists of two paradigms: frontend and backend development..."
                link="https://www.notion.so/techsyndicate/Web-Development-342122d8a41a47c2bf513a74aa99fbd9?pvs=25"
                knowMoreColor="text-white"
              />
            </div>

            <div className="relative">
              <ResourceCardMobile
                link="https://www.notion.so/techsyndicate/Design-6aa4300393a04f3fbf4b78e1fee67e7c?pvs=25"
                title="2D Design"
                body="Design is something that involves thorough planning as well as ideation of the way your product..."
                bgcolor="bg-white"
                color="text-black"
                knowMoreColor="text-black"
                banner="/learn/banners/2d_design_banner.png"
                additionalHeading="text-black mt-[17vw]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/3d_cuboids.png"
                className="w-[40vw] absolute top-[-12.5vw] right-[5vw] [clip-path:polygon(0%_29.41177%,100%_29.41177%,100%_100%,0%_100%)]"
                alt=""
              />
              <ResourceCardMobile
                bgcolor="bg-[#8151FF]"
                color="text-[rgba(255,255,255,0.65)]"
                title="3D Design"
                body="3D modelling is a vast field from low poly designs to realistically detailed environments..."
                link="https://techsyndicate.notion.site/3D-Design-c7cf7b5942c94e738d44914c7895d61d"
                knowMoreColor="text-[rgba(255,255,255,0.8)]"
                additionalHeading="mt-[20vw]"
              />
            </div>

            <div className="relative">
              <ResourceCardMobile
                bgcolor="bg-[#16181C]"
                color="text-[rgba(255,255,255,0.65)]"
                title="A/V Editing"
                body="A/V can be categorized following types: Films, Motion Graphics, Animation, Videos..."
                link="https://www.notion.so/techsyndicate/A-V-Editing-d20e21ef8e944470a9e0cdad92fbab1e?pvs=25"
                knowMoreColor="text-[#6C57EE]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/ctf_flag.png"
                className="w-[15vw] absolute bottom-0 right-[5vw]"
                alt=""
              />
              <ResourceCardMobile
                title="CTF"
                body="Capture the flag challenges are cyber security exercises where flags..."
                bgcolor="bg-[#be3144]"
                color="text-white w-[50vw]"
                link="https://www.notion.so/techsyndicate/Capture-The-Flag-a66386a75ce44bc79c51429b34250931?pvs=25"
                knowMoreColor="text-[rgba(255,255,255,0.8)] pt-[1vw]"
              />
            </div>

            <div className="relative">
              <ResourceCardMobile
                title="Group Discussion"
                body="Group discussion consists of a group of individuals having an intellectual discussion..."
                bgcolor="bg-[#16181c]"
                color="text-white"
                link="https://www.notion.so/techsyndicate/Group-Discussion-903404e4ee1b4aa09e17746989e547b4?pvs=25"
                knowMoreColor="text-[#EE9657]"
                banner="/learn/banners/gd_banner.png"
                additionalHeading="mt-[35.5vw]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/quiz_illustration.png"
                className="w-[17vw] absolute top-[5vw] right-0"
                alt=""
              />
              <ResourceCardMobile
                title="Quiz"
                body="Quizzing is one of the most challenging events in any tech competition. It aims at testing..."
                bgcolor="bg-[#319CBE]"
                color="text-white w-[60vw]"
                link="https://www.notion.so/techsyndicate/Quiz-a11151bcd8bd4b10b2d0d0ca702884d5?pvs=25"
                knowMoreColor="pt-[1vw]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/cross_illustration.svg"
                className="w-[20vw] absolute bottom-[2.5vw] right-0"
                alt=""
              />
              <ResourceCardMobile
                title="Crossword"
                body="Crossword is one of the most fun events that you’ll ever come across. It doesn’t require..."
                bgcolor="bg-[#16181C]"
                color="text-white w-[60vw]"
                link="https://www.notion.so/techsyndicate/Crossword-4a4133cf77b848e0aeb639e9f169f9a6?pvs=25"
                knowMoreColor="text-[#7EEE57] mt-[2vw]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/cryptic_illustration.svg"
                className="w-[25vw] absolute bottom-[5vw] right-[7vw]"
                alt=""
              />
              <ResourceCardMobile
                title="Cryptic Hunts"
                body="Cryptic hunts basically refer to scavenger hunts that are carried out over the internet..."
                bgcolor="bg-[#BE7531]"
                color="text-white mt-[1.5vw]"
                link="https://www.notion.so/techsyndicate/Cryptic-Hunts-f452885083b54d048187b0a7f053e231?pvs=25"
                knowMoreColor="text-[rgba(255,255,255,0.8)] mt-[1.5vw]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/gear_illustration.svg"
                className="w-[20vw] absolute bottom-[0vw] right-[0vw]"
                alt=""
              />
              <ResourceCardMobile
                title="Hardware"
                body="Hardware is the part of a computer that is designed to perform a specific task..."
                bgcolor="bg-[#16181C]"
                color="text-white w-[65vw]"
                link="https://techsyndicate.notion.site/Hardware-1d0295576735804bb6aae2dbe9aaa54d"
                knowMoreColor="text-[#5793EE] mt-[1.9vw]"
              />
            </div>

            <div className="relative">
              <img
                src="/learn/illustrations/photo_illustration.svg"
                className="w-[20vw] absolute bottom-0 right-[5vw]"
                alt=""
              />
              <ResourceCardMobile
                title="Photography"
                body="Photography is the art, application, and practice of creating durable images..."
                bgcolor="bg-[#31BEA5]"
                color="text-white"
                link="https://www.notion.so/techsyndicate/Photography-2ae74af2944545328dd5f69a71218465?pvs=25"
                knowMoreColor="text-[rgba(255,255,255,0.8)] mt-[5vw]"
              />
            </div>

            <div className="relative mb-[10vw]">
              <img
                src="/learn/illustrations/prog_illustration.svg"
                className="w-[30vw] absolute bottom-0 right-0"
                alt=""
              />
              <ResourceCardMobile
                title="Programming"
                body="Programming is A Very Fun Mind Sport, As the name says..."
                bgcolor="bg-[#16181C]"
                color="text-white w-[50vw]"
                link="https://www.notion.so/techsyndicate/Programming-46280d608cab4b9bafe84187ffaed616?pvs=25"
                knowMoreColor="text-[#EE5784]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-y-auto no-scrollbar h-screen w-screen">
      <Navbar />
      <h1 className="text-3xl font-medium text-center mt-[15vh] ">
        LEARNING RESOURCES
      </h1>
      <p className="w-[30vw] text-center ml-[35vw] text-[#aaa] text-base mt-[3vh]">
        A collection of tutorials, notes, and useful links to help you
        understand and explore various topics.
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            window.open(
              "https://techsyndicate.notion.site/Learning-Resources-11076be83f5e4456a105af9f2394b8b5",
              "_blank",
              "noopener, noreferrer"
            );
          }}
          className="bg-[#161c17] cursor-pointer px-[4vw] py-[2vh] rounded-[100vw] mt-[4.2vh] flex items-center gap-[0.4vw] text-[1.1vw]"
        >
          NOTION <img src="/rightArrow.png" className="h-[0.9vw]"></img>
        </button>
      </div>

      <div className="w-[75vw] relative mx-[12.5vw] mt-[10vh] mb-[5vw]">
        <img
          src="/learn/waves.png"
          className="w-[5vw] h-[2.2vw] absolute top-[-0.8vw] left-[26.5vw] z-20"
        ></img>

        <img
          src="/learn/illustrations/3d_cuboids.png"
          className="w-[18vw] h-[17vw] z-50 absolute top-[11vw] left-[9vw] [clip-path:polygon(0%_29.41177%,100%_29.41177%,100%_100%,0%_100%)]"
        ></img>

        <img
          src="/learn/illustrations/web_dev_circle.png"
          className="w-[10vw] left-[40vw] top-[20vw] z-50 absolute [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)]"
        ></img>

        <img
          src="/learn/illustrations/ctf_flag.png"
          className="absolute h-[7.5vw] top-[38.5vw] z-50 left-[70vw]"
        ></img>

        <img
          src="/learn/illustrations/quiz_illustration.png"
          className="absolute w-[6vw] top-[47vw] z-50 left-[47vw]"
        ></img>

        <img
          src="/learn/illustrations/cross_illustration.svg"
          className="absolute w-[9vw] top-[54vw] z-50 left-[69vw]"
        ></img>

        <img
          src="/learn/illustrations/cryptic_illustration.svg"
          className="absolute w-[10vw] top-[78vw] z-50 left-[41vw]"
        ></img>

        <img
          src="/learn/illustrations/tool_illustration.svg"
          className="absolute w-[7vw] top-[68.5vw] z-50 left-[68.5vw]"
        ></img>

        <img
          src="/learn/illustrations/gear_illustration.svg"
          className="absolute w-[7vw] top-[79.5vw] z-50 left-[68.75vw]"
        ></img>

        <img
          src="/learn/illustrations/photo_illustration.svg"
          className="absolute w-[7vw] top-[92.5vw] z-50 left-[15vw]"
        ></img>

        <img
          src="/learn/illustrations/prog_illustration.svg"
          className="absolute w-[14vw] top-[87.25vw] z-50 left-[60vw]"
        ></img>

        <ResourceCard
          width="w-[30vw]"
          height="h-[15vw]"
          link="https://www.notion.so/techsyndicate/App-Development-3eeb461d6dea4c919dfec2179b7bced0?pvs=25"
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
          link="https://www.notion.so/techsyndicate/Web-Development-342122d8a41a47c2bf513a74aa99fbd9?pvs=25"
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
          link="https://www.notion.so/techsyndicate/Design-6aa4300393a04f3fbf4b78e1fee67e7c?pvs=25"
          title="2D Design"
          body="Design is something that involves thorough planning as well as ideation of the way your product..."
          top="top-0"
          left="left-[52vw]"
          bgcolor="bg-white"
          color="text-black"
          knowMoreColor="text-black"
          banner="/learn/banners/2d_design_banner.png"
          additionalHeading="text-black"
        ></ResourceCard>

        <ResourceCard
          width="w-[30vw]"
          height="h-[30vw]"
          link="https://techsyndicate.notion.site/3D-Design-c7cf7b5942c94e738d44914c7895d61d"
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
          link="https://www.notion.so/techsyndicate/A-V-Editing-d20e21ef8e944470a9e0cdad92fbab1e?pvs=25"
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
          link="https://www.notion.so/techsyndicate/Capture-The-Flag-a66386a75ce44bc79c51429b34250931?pvs=25"
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
          link="https://www.notion.so/techsyndicate/Group-Discussion-903404e4ee1b4aa09e17746989e547b4?pvs=25"
          knowMoreColor="text-[#EE9657]"
          banner="/learn/banners/gd_banner.png"
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
          link="https://www.notion.so/techsyndicate/Quiz-a11151bcd8bd4b10b2d0d0ca702884d5?pvs=25"
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
          link="https://www.notion.so/techsyndicate/Crossword-4a4133cf77b848e0aeb639e9f169f9a6?pvs=25"
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
          link="https://www.notion.so/techsyndicate/Cryptic-Hunts-f452885083b54d048187b0a7f053e231?pvs=25"
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
          link="https://techsyndicate.notion.site/Hardware-1d0295576735804bb6aae2dbe9aaa54d"
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
          link="https://www.notion.so/techsyndicate/Photography-2ae74af2944545328dd5f69a71218465?pvs=25"
          knowMoreColor="text-[rgba(255,255,255,0.8)] mt-[5vw]"
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
          link="https://www.notion.so/techsyndicate/Programming-46280d608cab4b9bafe84187ffaed616?pvs=25"
          knowMoreColor="text-[#EE5784]"
          additional="p-[2vw] mb-[4vw]"
        ></ResourceCard>

        <div className="absolute top-[98vw] w-[10vw] h-[4vw]"></div>
      </div>
    </div>
  );
}

export default ResourcesPage;
