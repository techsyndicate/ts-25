import React from "react";
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
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface AlumniGridProps {
  batch: string;
  alumnus?: {
    name: string;
    exrole: string;
    pfp: string;
    batch: string;
    status: string;
  }[];
}

const AlumniCardGrid: React.FC<AlumniGridProps> = ({ batch, alumnus = [] }) => {
  return (
    <>
      <div className="w-[80vw] flex flex-col items-center justify-center flex-wrap mt-[5vh] gap-[3vw] wrap-anywhere">
        <h1 className="sm:text-[3vw] text-[8vw] text-[#16e16e] self-start">{batch}</h1>

        <div className="sm:w-[80vw] flex sm:flex-row flex-col items-center justify-center sm:flex-wrap mb-[8vh] gap-[3vw] sm:wrap-anywhere">
          {alumnus.map((member, index) => {
            return (
              <div className="sm:w-[20vw] sm:h-[30vw] w-[70vw] h-[100vw] flex flex-col items-center mt-[4vh] bg-[#191919] sm:rounded-[1vw] rounded-[4vw] group relative " key={index}>
                <img
                  src={member.pfp}
                  alt={member.name}
                  className="sm:w-[25vw] w-[70vw] aspect-square object-cover sm:p-[2vw] p-[4vw] sm:rounded-[2.6vw] rounded-[7vw]"
                />
                <h2 className="text-[#fff] sm:text-[2vw] text-[8vw]">{member.name}</h2>
                <h4 className="sm:text-[#8c8c8c] sm:text-[1.4vw] text-[5vw] sm:group-hover:text-[#16e16e] text-[#16e16e] transition-all duration-300 mt-[1vw]">
                  {member.exrole}
                </h4>
                <h4 className="text-[#8c8c8c] sm:text-[1vw] sm:mt-[0.6vw] text-[3vw] mt-[1vw]">
                  {member.status}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AlumniCardGrid;
