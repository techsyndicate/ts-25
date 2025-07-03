"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ResourceLimits } from "worker_threads";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from 'next/image';

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
        } text-[5vw] mt-[5vw] cursor-pointer`}
        onClick={() => {
          window.open(l, "_blank", "noopener, noreferrer");
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
        <Image
          src={banner}
          alt="Resource banner"
          width={0}
          height={0}
          sizes="80vw"
          className={`rounded-tr-[0.8vw] rounded-tl-[0.8vw] ${width} absolute top-0 left-0 h-[6vw] object-cover`}
        />
      </>
    );
  } else {
    return;
  }
}

interface ResourceCardProps {
  link?: string;
  title: string;
  body: string;
  banner?: string;
  bgcolor: string;
  color: string;
  additional?: string;
  additionalHeading?: string;
  knowMoreColor?: string;
}

function ResourceCardMobile({
  link,
  title,
  body,
  banner,
  bgcolor,
  color,
  additional,
  additionalHeading,
  knowMoreColor,
}: ResourceCardProps) {
  const router = useRouter();
  return (
    <div
      className={`rounded-[1.6vw] box-border p-[5.6vw] w-[80vw] ${bgcolor} ${
        additional ? additional : ""
      }`}
    >
      {cardBanner(banner, "w-[80vw]")}
      <h1
        className={`leading-[1.2] text-[6vw] mb-[5vw] ${
          additionalHeading ? additionalHeading : ""
        }`}
      >
        {title}
      </h1>
      <p className={`${color} opacity-75 font-light`}>{body}</p>
      {knowMoreButton(link, knowMoreColor, router)}
    </div>
  );
}

export default ResourceCardMobile;
