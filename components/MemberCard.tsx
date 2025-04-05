import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSpotify, faTwitter, faInstagram, faFacebook, faYoutube, faReddit, faPinterest, faArtstation, faDribbble, faBehance, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

interface MemberCardProps {
    name: string;
    title: string;
    image: string;
    socialIcons?: string[];
}

const MemberCard: React.FC<MemberCardProps> = ({ name, title, image, socialIcons = [] }) => {
    let platform = '';
    return (
        // <div className="w-[20vw] h-[27vw] flex flex-col items-center mt-[4vh] bg-[#191919] rounded-[1vw] group relative hover:h-[30vw] transition-all duration-300">
        <div className="w-[20vw] h-[30vw] flex flex-col items-center mt-[4vh] bg-[#191919] rounded-[1vw] group relative ">
            <img src={image} alt={name} className="w-[25vw] aspect-square object-cover p-[2vw]" />
            <h2 className="text-[#fff] text-[2vw]">{name}</h2>
            <h4 className="text-[#8c8c8c] text-[1.4vw] group-hover:text-[#16e16e] transition-all duration-300">{title}</h4>
            <div id="socials" className="flex flex-row justify-center items-center bg-[#393939] rounded-[1vw] gap-[1.4vw] mt-[3vw] p-[1vw] px-[2.4vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {socialIcons.map((icon, index) => {
                    const iconDefinition = icon.includes('github') ? faGithub 
                        : icon.includes('linkedin') ? faLinkedin 
                        : icon.includes('spotify') ? faSpotify 
                        : icon.includes('twitter') || icon.includes('//x.com') ? faTwitter 
                        : icon.includes('instagram') ? faInstagram 
                        : icon.includes('facebook') ? faFacebook 
                        : icon.includes('youtube') ? faYoutube 
                        : icon.includes('reddit') ? faReddit 
                        : icon.includes('pinterest') ? faPinterest 
                        : icon.includes('mailto') ? faEnvelope 
                        : icon.includes('artstation') ? faArtstation 
                        : icon.includes('bento') ? faArtstation
                        : icon.includes('dribbble') ? faDribbble
                        : icon.includes('behance') ? faBehance
                        : icon.includes('soundcloude') ? faSoundcloud
                        : icon.includes('anirudhchaturvedi.me') || icon.includes('aayushgarg.net') || icon.includes('vercel') || icon.includes('linktree') || icon.includes('lintr') || icon.includes('linktr.ee') ? faGlobe
                        : '';
                    return (
                        <a href={icon} target="_blank" rel="noopener noreferrer" key={index} className='text-[#fff] hover:text-[#16e16e] transition-all duration-300 items-center m-0 pt-0.5'>
                            <FontAwesomeIcon icon={iconDefinition} className="text-[1.5vw] align-middle self-center" />
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default MemberCard