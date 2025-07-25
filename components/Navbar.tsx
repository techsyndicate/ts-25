"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { usePathname } from "next/navigation";

const getPageName = (pathname: string): string => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/learn":
      return "Learn";
    case "/about":
      return "About";
    case "/team":
      return "Team";
    case "/events":
      return "Events";
    case "/alumni":
      return "Alumni";
    case "/robotronics":
      return "Robotronics";
    default:
      return "404";
  }
};

const Navbar = React.memo(() => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isClicked, setIsClicked] = React.useState(false);
  const pathname = usePathname();
  const page = getPageName(pathname);

  const NavLink = React.useCallback(({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link 
      href={href} 
      className={className}
      prefetch={true}
    >
      {children}
    </Link>
  ), []);

  if (isMobile) {
    if (isClicked) {
      return (
        <div className="">
          <div className="relative z-[3] w-[100vw] h-[14vh] flex flex-row items-center justify-center bg-[#000]" />
          <div className="w-[100vw] flex flex-col absolute top-0 bg-[#000]">
            <div className="borderRemove z-[4] borderRemove bg-[#000] outline-2 outline-[rgba(255,255,255,0.17)] rounded-lg w-[81vw] ml-[9.5vw] h-[6vh] mt-[4vh] flex flex-row items-center justify-between px-[4vw]">
              <div className="flex flex-row items-center">
                <img
                  src="/tsLogo.svg"
                  alt="TS Logo"
                  className="size-[3vh] ml-[-1vw]"
                />
                <h1 className="ml-[2vw] text-[3.75vw]">
                  Tech Syndicate
                  <span className="text-[rgba(255,255,255,0.4)]">/{page}</span>
                </h1>
              </div>
              <button
                onClick={() => setIsClicked(false)}
                className="w-[2vh] aspect-square"
                aria-label="Close menu"
              >
                <img
                  src="/hamburger-menu.svg"
                  className="w-full h-full"
                  alt=""
                />
              </button>
            </div>
            <div className="mt-[1vh] z-[2] pt-[3vh] pl-[13vw] pb-[5vh] flex flex-col gap-[4vh] text-[4vw] navbarAnimated bg-[#000]">
              <NavLink href="/" className="text-[rgba(255,255,255,0.35)]">
                Home
              </NavLink>
              <NavLink href="/learn" className="text-[rgba(255,255,255,0.35)]">
                Learn
              </NavLink>
              <NavLink href="/about" className="text-[rgba(255,255,255,0.35)]">
                About
              </NavLink>
              <NavLink href="/team" className="text-[rgba(255,255,255,0.35)]">
                Team
              </NavLink>
              <NavLink href="/events" className="text-[rgba(255,255,255,0.35)]">
                Events
              </NavLink>
              <NavLink href="/robotronics" className="text-[rgba(255,255,255,0.35)]">
                Robotronics
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="relative z-[2] w-[100vw] h-[14vh] flex flex-row items-center justify-center bg-[#000]">
        <div className="w-[81vw] h-[6vh] flex flex-row items-center justify-between outline-2 outline-[rgba(255,255,255,0.17)] rounded-lg px-[4vw]">
          <div className="flex flex-row items-center">
            <img
              src="/tsLogo.svg"
              alt="TS Logo"
              className="size-[3vh] ml-[-1vw]"
            />
            <h1 className="ml-[2vw] text-[3.75vw]">
              Tech Syndicate
              <span className="text-[rgba(255,255,255,0.4)]">/{page}</span>
            </h1>
          </div>
          <button
            onClick={() => setIsClicked(true)}
            className="w-[2vh] aspect-square z-[10000]"
            aria-label="Open menu"
          >
            <img
              src="/hamburger-menu.svg"
              className="w-full h-full"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="z-[10] my-[1.8vw] flex flex-row items-center justify-center gap-[0.7vw] relative">
      <button
        onClick={() => router.push('/')}
        className="border-2 border-[rgba(255,255,255,0.17)] flex flex-row items-center justify-center px-[5vw] py-[0.68vw] rounded-lg gap-[0.5vw] cursor-pointer"
      >
        <img src="/tsLogo.svg" alt="TS Logo" className="size-[1.5vw]" />
        <h1>Tech Syndicate</h1>
      </button>
      <div className="bg-[rgba(51,51,51,0.3)] bg- py-[1.8vh] px-[5vw] flex flex-row items-center justify-center rounded-lg">
        <div className="flex flex-row items-center justify-center gap-[2vw]">
          <NavLink
            href="/learn"
            className={`cursor-pointer hover:text-[#fff] transition-all duration-300 ${
              pathname === "/learn"
                ? "text-[#ffffff]"
                : "text-[rgba(255,255,255,0.35)]"
            }`}
          >
            Learn
          </NavLink>
          <NavLink
            href="/about"
            className={`cursor-pointer hover:text-[#fff] transition-all duration-300 ${
              pathname === "/about"
                ? "text-[#ffffff]"
                : "text-[rgba(255,255,255,0.35)]"
            }`}
          >
            About
          </NavLink>
          <NavLink
            href="/team"
            className={`cursor-pointer hover:text-[#fff] transition-all duration-300 ${
              pathname === "/team"
                ? "text-[#ffffff]"
                : "text-[rgba(255,255,255,0.35)]"
            }`}
          >
            Team
          </NavLink>
          <NavLink
            href="/events"
            className={`cursor-pointer hover:text-[#fff] transition-all duration-300 ${
              pathname === "/events"
                ? "text-[#ffffff]"
                : "text-[rgba(255,255,255,0.35)]"
            }`}
          >
            Events
          </NavLink>
          <NavLink
            href="/robotronics"
            className={`cursor-pointer hover:text-[#fff] transition-all duration-300 ${
              pathname === "/robotronics"
                ? "text-[#ffffff]"
                : "text-[rgba(255,255,255,0.35)]"
            }`}
          >
            Robotronics
          </NavLink>
        </div>
      </div>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
