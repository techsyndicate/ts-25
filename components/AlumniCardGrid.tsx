import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSpotify, faTwitter, faInstagram, faFacebook, faYoutube, faReddit, faPinterest, faArtstation, faDribbble, faBehance, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

interface AlumniGridProps {
    batch: string;
    alumnus?: {name:string, exrole:string, pfp: string, batch:string, status:string}[];
}

const AlumniCardGrid: React.FC<AlumniGridProps> = ({ batch, alumnus = [] }) => {
    return (
        <>
            <div className="w-[80vw] flex flex-col items-center justify-center flex-wrap mt-[5vh] gap-[3vw] wrap-anywhere">
                <h1 className='text-[3vw] text-[#16e16e] self-start'>{batch}</h1>

                <div className='flex flex-row items-center justify-center flex-wrap mt-[2vh] gap-[3vw] wrap-anywhere'>
                {alumnus.map((member, index) => {
                    return (
                        <div className="w-[20vw] h-[29vw] flex flex-col items-center mt-[2vh] bg-[#191919] rounded-[1vw] group relative " key={index}>
                            <img src={member.pfp} alt={member.name} className="w-[25vw] aspect-square object-cover p-[2vw]" />
                            <h2 className="text-[#fff] text-[2vw]">{member.name}</h2>
                            <h4 className="text-[#8c8c8c] text-[1.4vw] group-hover:text-[#16e16e] transition-all duration-300">{member.exrole}</h4>
                            <h4 className="text-[#8c8c8c] text-[1vw] mt-[0.6vw]">{member.status}</h4>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default AlumniCardGrid