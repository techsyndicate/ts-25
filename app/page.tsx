"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIsMobile } from "@/hooks/useIsMobile";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const headingFont = localFont({
  src: "../public/headingFont.otf",
});

export default function Home() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetMousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="relative h-[100vh] overflow-x-hidden">
        <Navbar />
        <div className="relative mb-[10vw] z-[1]">
          <h1
            className={`${headingFont.className} text-[52.5vw] mt-[-21vw] text-center`}
            style={{
              backgroundImage:
                "linear-gradient(179deg, #16E16E 0.45%, #084422 126.49%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TECH
          </h1>
          <h1
            className={`${headingFont.className} text-[24vw] mt-[-21.5vw] text-center`}
            style={{
              backgroundImage:
                "linear-gradient(179deg, #FFF 0.45%, #5A5A5A 126.49%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SYNDICATE
          </h1>
          <img
            src="./home/cinema.svg"
            className="absolute top-[19vw] left-0 w-[24vw]"
            alt=""
          />
          <img
            src="./home/o1.svg"
            className="absolute top-[12vw] w-[28vw] right-[-3vw]"
            alt=""
          />
          <img
            src="./home/camera.svg"
            className="absolute bottom-[25.9vw] left-[12vw] z-[-10] w-[34vw]"
            alt=""
          />
          <img
            src="./home/cube.svg"
            className="absolute bottom-[19.4vw] right-[7vw] z-[-10] w-[30vw]"
            alt=""
          />
          <img
            src="./home/camera2.svg"
            className="absolute bottom-[-10vw] left-[0vw] w-[40vw]"
            alt=""
          />
          <img
            src="./home/cam3.svg"
            className="absolute bottom-[-10vw] z-[100] right-[0vw] w-[30vw]"
            alt=""
          />
        </div>
        <div className="relative h-[100vw]">
          <div className="absolute bottom-[10vw] w-[60vw] left-[20vw] z-[-100] aspect-square bg-[#16e16e] blur-[150px]" />
          <div className="absolute bottom-[3vw] right-[25vw] w-[50vw] z-[100] flex flex-row justify-evenly">
            <a
              href="https://github.com/techsyndicate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ABABAB] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="sm:text-[1.2vw] text-[5vw] align-middle self-center"
              />
            </a>
            <a
              href="https://instagram.com/techsyndicate46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ABABAB] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="sm:text-[1.2vw] text-[5vw] align-middle self-center"
              />
            </a>
            <a
              href="https://behance.net/techsyndicate46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ABABAB] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faBehance}
                className="sm:text-[1.2vw] text-[5vw] align-middle self-center"
              />
            </a>
            <a
              href="mailto:contact@techsyndicate.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ABABAB] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="sm:text-[1.2vw] text-[5vw] align-middle self-center"
              />
            </a>
            <a
              href="https://www.facebook.com/syndicateofamity46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ABABAB] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="sm:text-[1.2vw] text-[5vw] align-middle self-center"
              />
            </a>
          </div>
          <img
            src="./home/mobile-man.svg"
            className="absolute w-[100vw] bottom-[-7vw]"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-[100vw] h-[100vh] overflow-hidden ${outfitFont.variable} ${outfitFont.className} antialiased m-0`}
    >
      <div>
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
            className="absolute top-[-4vh] left-[16vw] w-[13vw] parallax"
            alt=""
          />
          <img
            src="./home/o1.svg"
            className="absolute top-[-1vh] w-[13vw] right-[22vw] parallax"
            alt=""
          />
          <img
            src="./home/camera.svg"
            className="absolute bottom-[-2vh] left-[26vw] z-[-10] w-[15vw] parallax parallax-slow"
            alt=""
          />
          <div className="absolute bottom-[5vh] right-[16.1vw] flex flex-row gap-[1vw]">
            <a
              href="https://github.com/techsyndicate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="sm:text-[1.2vw] text-[6vw] align-middle self-center"
              />
            </a>
            <a
              href="https://instagram.com/techsyndicate46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="sm:text-[1.2vw] text-[6vw] align-middle self-center"
              />
            </a>
            <a
              href="https://behance.net/techsyndicate46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faBehance}
                className="sm:text-[1.2vw] text-[6vw] align-middle self-center"
              />
            </a>
            <a
              href="mailto:contact@techsyndicate.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="sm:text-[1.2vw] text-[6vw] align-middle self-center"
              />
            </a>
            <a
              href="https://www.facebook.com/syndicateofamity46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="sm:text-[1.2vw] text-[6vw] align-middle self-center"
              />
            </a>
          </div>
        </div>
        <img
          src="./home/camera2.svg"
          className="absolute bottom-0 left-[9vw] w-[30vw] parallax parallax-fast"
          alt=""
        />
        <img
          src="./home/cube.svg"
          className="absolute top-[35vh] right-[27vw] w-[14.4vw] parallax parallax-slow"
          alt=""
        />
        <img
          src="./home/cam3.svg"
          className="absolute bottom-0 right-[15vw] w-[19.3vw] parallax parallax-fast"
          alt=""
        />
        <img
          src="./home/man.svg"
          className="absolute bottom-[-2vh] left-[33vw] w-[35vw]"
          alt=""
        />
        <div className="w-[20vw] absolute left-[39.5vw] z-[-100] aspect-square bg-[#16e16e] blur-[200px]" />
      </div>
    </div>
  );
}
