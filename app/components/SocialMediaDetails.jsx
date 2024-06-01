"use client"
import React from 'react'
import SocialmediaCard from './SocialmediaCard';
import { motion } from "framer-motion";

const socialmediaList = [
    {
        id: "0",
        name:"Github",
        image: "/github-icon.png",
        link: "https://github.com/Aksal00"
    },
  
    {
        id: "1",
        name:"Linkedin",
        image:"/linkedin-icon.png",
        link: "https://www.linkedin.com/in/akila-srikantha-2693b41b9/"
    },
  
    {
        id: "2",
        name:"Facebook",
        image:"/facebook-icon.png",
        link: "https://web.facebook.com/profile.php?id=100015022902064"
    },
    {
      id: "3",
      name:"X",
      image:"/x-icon.png",
      link: "https://x.com/akila_salinda"
    },
    {
      id: "4",
      name:"Youtube",
      image:"/youtube-icon.png",
      link: "https://youtube.com/playlist?list=PL_zkjRWwoQj-i8ftGefLnyQJ-uLVxi-ZV&si=HTZ7yvgtF9b2RoK7"
    },
]

const SocialMediaDetails = () => {
  return (
    <section className='mt-10'>
      <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { x:0,opacity: 1, scale: 1},
                  hidden: { x:-50,opacity: 0, scale: 1 }
                }}
              
                className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
      <div className=" md:border rounded-full md:rounded-full border-opacity-50">
      <div>
        <h2 className="text-center text-4xl font-bold  mt-4 mb-4 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 justify-center">
          Let&apos;s Connect
        </h2>
      </div>
      
      <div className=" sm:border-[#33353F] rounded-xl flex flex-row justify-center gap-5  pb-4 place-content-center place-items-center">
          
        
          {socialmediaList.map((socialmedia, index) => {  
            return (   
                      <SocialmediaCard
                          key={socialmedia.id}
                          imgUrl={socialmedia.image}
                          name={socialmedia.skillName}
                          link= {socialmedia.link}

                      />
                         
            );
          })}
          
      </div>
      </div>
      </motion.div>
    </section>
    
  )
}

export default SocialMediaDetails