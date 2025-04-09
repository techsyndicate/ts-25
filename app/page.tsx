"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/headingFont.otf",
});

export default function Home() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetMousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      targetMousePosition.current = {
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      };
    };

    const animate = () => {
      mousePosition.current.x +=
        (targetMousePosition.current.x - mousePosition.current.x) * 0.2;
      mousePosition.current.y +=
        (targetMousePosition.current.y - mousePosition.current.y) * 0.2;

      const parallaxElements =
        document.querySelectorAll<HTMLElement>(".parallax");
      parallaxElements.forEach((el) => {
        let speed = parseFloat("0.01");
        if (el.classList.contains("parallax-slow")) {
          speed = parseFloat("0.005");
        }
        if (el.classList.contains("parallax-fast")) {
          speed = parseFloat("0.02");
        }
        const deltaX = mousePosition.current.x * speed;
        const deltaY = mousePosition.current.y * speed;

        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden">
      <Navbar />
      <div className="relative">
        <h1
          className={`${headingFont.className} mt-[-5vh] text-[14vw] text-center`}
          style={{
            backgroundImage:
              "linear-gradient(179deg, #FFF 0.45%, #5A5A5A 126.49%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span
            style={{
              backgroundImage:
                "linear-gradient(179deg, #16E16E 0.45%, #084422 126.49%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TECH
          </span>{" "}
          SYNDICATE
        </h1>
        <img
          src="./home/cinema.svg"
          className="absolute top-[-6vh] left-[19vw] scale-[0.7] parallax"
          alt=""
        />
        <img
          src="./home/o1.svg"
          className="absolute top-[-6vh] right-[23vw] scale-[0.7] parallax"
          alt=""
        />
        <img
          src="./home/camera.svg"
          className="absolute bottom-[-8vh] left-[25vw] z-[-10] scale-[0.7] parallax parallax-slow"
          alt=""
        />
        <div className="absolute bottom-[7vh] right-[15.8vw] flex flex-row items-center justify-center gap-[1vw]">
          <img src="./home/insta.svg" />
          <img src="./home/gh.svg" alt="" />
          <img src="./home/behance.svg" alt="" />
          <img src="./home/facebook.svg" alt="" />
        </div>
      </div>
      <img
        src="./home/camera2.svg"
        className="absolute bottom-0 left-[3vw] scale-[0.9] parallax parallax-fast"
        alt=""
      />
      <img
        src="./home/cube.svg"
        className="absolute top-[35vh] right-[27vw] scale-[0.7] parallax parallax-slow"
        alt=""
      />
      <img
        src="./home/cam3.svg"
        className="absolute bottom-0 right-[10vw] parallax parallax-fast"
        alt=""
      />
      <img
        src="./home/man.svg"
        className="absolute bottom-[-2vh] left-[32vw] scale-[0.95]"
        alt=""
      />
      <div className="w-[20vw] absolute left-[39.5vw] z-[-100] aspect-square bg-[#16e16e] blur-[200px]" />
    </div>
  );
}
