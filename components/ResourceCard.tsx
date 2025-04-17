"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ResourceLimits } from "worker_threads";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function knowMoreButton(
  l: string | undefined,
  knowMoreColor: string | undefined,
  router: AppRouterInstance
) {
  if (l) {
    return (
      <p
        className={`${
          knowMoreColor ? knowMoreColor : ""
        } text-[1.3vw] mt-[1vw] cursor-pointer`}
        onClick={() => {
          router.push(l);
        }}
      >
        Know More
      </p>
    );
  } else {
    return;
  }
}

function cardBanner(banner: string | undefined, width: string) {
  if (banner) {
    return (
      <>
        <div className={`${width} h-[6vw]`}></div>
        <img
          src={`${banner}`}
          className={`rounded-tr-[0.8vw] rounded-tl-[0.8vw] ${width} absolute top-0 left-0`}
        ></img>
      </>
    );
  } else {
    return;
  }
}

interface ResourceCardProps {
  width: string;
  height: string;
  link?: string;
  title: string;
  body: string;
  banner?: string;
  top: string;
  left: string;
  bgcolor: string;
  color: string;
  additional?: string;
  additionalHeading?: string;
  knowMoreColor?: string;
}

function ResourceCard({
  width,
  height,
  link,
  title,
  body,
  banner,
  top,
  left,
  bgcolor,
  color,
  additional,
  additionalHeading,
  knowMoreColor,
}: ResourceCardProps) {
  const router = useRouter();
  return (
    <div
      className={`rounded-[0.8vw] box-border p-[2.8vw] absolute ${width} ${height} ${top} ${left} ${bgcolor} ${
        additional ? additional : ""
      }`}
    >
      {cardBanner(banner, width)}
      <h1
        className={`leading-[1.2] text-[1.9vw] mb-[1.5vh] ${
          additionalHeading ? additionalHeading : ""
        }`}
      >
        {title}
      </h1>
      <p className={`${color} opacity-75 text-[1.2vw] font-light`}>{body}</p>
      {knowMoreButton(link, knowMoreColor, router)}
    </div>
  );
}

export default ResourceCard;
