import React from 'react'
import Linkedin from "../../public/linkedin-icon.svg";
import Facebook from "../../public/facebook-icon.svg";
import Instagram from "../../public/instagram-icon.svg";
import Github from "../../public/github-icon.svg";
import SocialmediaCard from './SocialmediaCard';

const socialmediaList = [
    {
        id: "1",
        name:"Github",
        image: Github,
        link: "https://github.com/Aksal00"
    },
  
    {
        id: "2",
        name:"Linkedin",
        image:Linkedin ,
        link: "https://www.linkedin.com/in/akila-srikantha-2693b41b9/"
    },
  
    {
        id: "3",
        name:"Facebook",
        image:Facebook,
        link: "https://web.facebook.com/profile.php?id=100015022902064"
    },
]

const SocialMediaDetails = () => {
  return (
    <section className='mt-10'>
      <div className='md:border rounded-full md:rounded-full border-opacity-50'>
      <div>
        <h2 className="text-center text-4xl font-bold  mt-4 mb-4 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 justify-center">
          Let&apos;s Connect
        </h2>
      </div>
      
      <div className="sm:border-[#33353F] rounded-xl flex flex-row justify-center md:gap-5  mb-4">
          
        
          {socialmediaList.map((socialmedia, index) => {
            return (
                
                <ul className="grid ">
                      key={index}
                      <SocialmediaCard
                          
                          imgUrl={socialmedia.image}
                          name={socialmedia.skillName}
                          link= {socialmedia.link}

                      />
                  </ul>
                
            );
          })}
          
      </div>
      </div>
    </section>
    
  )
}

export default SocialMediaDetails