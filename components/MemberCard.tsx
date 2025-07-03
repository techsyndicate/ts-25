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
const getIconForUrl = (url: string) => {
  if (url.includes("github")) return faGithub;
  if (url.includes("linkedin")) return faLinkedin;
  if (url.includes("spotify")) return faSpotify;
  if (url.includes("twitter") || url.includes("//x.com")) return faTwitter;
  if (url.includes("instagram")) return faInstagram;
  if (url.includes("facebook")) return faFacebook;
  if (url.includes("youtube")) return faYoutube;
  if (url.includes("reddit")) return faReddit;
  if (url.includes("pinterest")) return faPinterest;
  if (url.includes("mailto")) return faEnvelope;
  if (url.includes("artstation") || url.includes("bento")) return faArtstation;
  if (url.includes("dribbble")) return faDribbble;
  if (url.includes("behance")) return faBehance;
  if (url.includes("soundcloud")) return faSoundcloud;
  if (url.includes("tryhackme")) return faFlag;
  if (url.includes("anirudhchaturvedi.me") || 
      url.includes("aayushgarg.net") || 
      url.includes("vercel") || 
      url.includes("linktree") || 
      url.includes("lintr") || 
      url.includes("linktr.ee")) return faGlobe;
  return faGlobe;
};

const MemberCard: React.FC<MemberCardProps> = React.memo(({
  name,
  title,
  image,
  socialIcons = [],
}) => {
  return (
    <div className="sm:w-[19vw] sm:h-[27vw] w-[70vw] h-[100vw] flex flex-col items-center mt-[4vh] bg-[#191919] sm:rounded-[1vw] rounded-[4vw] group relative hover:scale-102 transition-all duration-300">
      <Image
        src={image}
        alt={name}
        className="sm:w-[25vw] w-[70vw] aspect-square object-cover sm:p-[2vw] p-[4vw] sm:rounded-[2.6vw] rounded-[7vw] bg-[#2a2a2a]"
        sizes="(max-width: 768px) 70vw, 25vw"
        width={300}
        height={300}
        loading="lazy"
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
          const iconDefinition = getIconForUrl(icon);
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
});

MemberCard.displayName = 'MemberCard';

export default MemberCard;
