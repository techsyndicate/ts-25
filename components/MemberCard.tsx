import React from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSpotify,
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faReddit,
  faPinterest,
  faArtstation,
  faDribbble,
  faBehance,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faFlag, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface MemberCardProps {
  name: string;
  title: string;
  image: string;
  socialIcons?: string[];
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  title,
  image,
  socialIcons = [],
}) => {
  let platform = "";
  return (
    <div className="sm:w-[19vw] sm:h-[27vw] w-[70vw] h-[100vw] flex flex-col items-center mt-[4vh] bg-[#191919] sm:rounded-[1vw] rounded-[4vw] group relative hover:scale-102 transition-all duration-300">
      <Image
        src={image}
        alt={name}
        className="sm:w-[25vw] w-[70vw] aspect-square object-cover sm:p-[2vw] p-[4vw] sm:rounded-[2.6vw] rounded-[7vw]"
        sizes="100vw"
        width={0}
        height={0}
      />
      <h2 className="text-[#fff] sm:text-[2vw] text-[7vw]">
        {name}
      </h2>
      <h4 className="sm:text-[#8c8c8c] sm:text-[1.4vw] text-[5vw] sm:group-hover:text-[#16e16e] text-[#fff] transition-all duration-300">
        {title}
      </h4>
      <div
        id="socials"
        className="flex flex-row justify-center items-center bg-[#393939] rounded-[4vw] gap-[4vw] mt-[5vw] p-[4vw] px-[7vw] sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 sm:rounded-[1vw] sm:gap-[1.4vw] sm:mt-[1.6vw] sm:p-[1vw] sm:px-[2.4vw]"
      >
        {socialIcons.map((icon, index) => {
          const iconDefinition = icon.includes("github")
            ? faGithub
            : icon.includes("linkedin")
            ? faLinkedin
            : icon.includes("spotify")
            ? faSpotify
            : icon.includes("twitter") || icon.includes("//x.com")
            ? faTwitter
            : icon.includes("instagram")
            ? faInstagram
            : icon.includes("facebook")
            ? faFacebook
            : icon.includes("youtube")
            ? faYoutube
            : icon.includes("reddit")
            ? faReddit
            : icon.includes("pinterest")
            ? faPinterest
            : icon.includes("mailto")
            ? faEnvelope
            : icon.includes("artstation")
            ? faArtstation
            : icon.includes("bento")
            ? faArtstation
            : icon.includes("dribbble")
            ? faDribbble
            : icon.includes("behance")
            ? faBehance
            : icon.includes("soundcloude")
            ? faSoundcloud
            : icon.includes("anirudhchaturvedi.me") ||
              icon.includes("aayushgarg.net") ||
              icon.includes("vercel") ||
              icon.includes("linktree") ||
              icon.includes("lintr") ||
              icon.includes("linktr.ee")
            ? faGlobe
            : icon.includes("tryhackme")
            ? faFlag
            : faGlobe
          return (
            <a
              href={icon}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5"
            >
              <FontAwesomeIcon
                icon={iconDefinition}
                className="sm:text-[1.5vw] text-[6vw] align-middle self-center"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MemberCard;
