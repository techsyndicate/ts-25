import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSpotify, faTwitter, faInstagram, faFacebook, faYoutube, faReddit, faPinterest, faArtstation, faDribbble, faBehance, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

interface AlumniCardProps {
    batch: string;
    alumnus?: {name:string, exrole:string, pfp: string, status:string}[];
}

const AlumniCard: React.FC<AlumniCardProps> = ({ batch, alumnus = [] }) => {
    let platform = '';
    return (
        // <div className="w-[20vw] h-[27vw] flex flex-col items-center mt-[4vh] bg-[#191919] rounded-[1vw] group relative hover:h-[30vw] transition-all duration-300">
        <div className="w-[20vw] h-[30vw] flex flex-col items-center mt-[4vh] bg-[#191919] rounded-[1vw] group relative ">
            <img src={image} alt={name} className="w-[25vw] aspect-square object-cover p-[2vw]" />
            <h2 className="text-[#fff] text-[2vw]">{name}</h2>
            <h4 className="text-[#8c8c8c] text-[1.4vw] group-hover:text-[#16e16e] transition-all duration-300">{title}</h4>
        </div>
    )
}

export default AlumniCard