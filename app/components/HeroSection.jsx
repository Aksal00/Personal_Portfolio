"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';



const HeroSection = () => {
  return (
    <section id='home' className=''>
        <div className='py-20 grid grid-cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <motion.div
                initial={{ x:-50,opacity: 0}}
                animate={{ x:0,opacity: 1}}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className=""
                >
                <h1 className='text-white text-2xl lg:text-4xl font-light lg:mb-2'>Hi, I am  </h1>
                <h1 className='mb-3 lg:mb-4 text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600'>Akila Srikantha{" "}</h1> 
                <h1 className='text-white mb-6 text-2xl lg:text-4xl font-light'>I am a                 
                <span className='text-white mb-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                <TypeAnimation
                    sequence={[
                        ' Computer Science Undergraduate.',
                        1000,
                        ' Tech Geek.',
                        1000,
                        ' Web Developer.',
                        1000,
                        ' Mobile App Developer.',
                        1000,
                        ' Game Developer.',
                        1000,
                        ' UI/UX Designer.',
                        1000,
                        ' Video Editor.',
                        1000,
                        ' Freelancer.',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </span>
                </h1>
                <p className="text-[#d1d1d1] text-center sm:text-left sm:text-md mb-6 sm:mr-8 lg:mr-14 lg:text-xl">
                Welcome to my online portfolio! Scroll down to discover more about me.
                </p>
                <div >
                    
                    <span class="group relative">
                            
                        <Link href="#contact">
                            <button  className ='hover:shadow-lg hover:shadow-blur hover:shadow-orange-500 relative px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-orange-600 hover:bg-yellow-500 text-white hover:text-black'>Contact Me</button>
                        </Link>
                            
                    </span>
                    <span class="group relative">
                        <button  className ='hover:shadow-lg hover:shadow-blur hover:shadow-orange-500 relative  px-1 py-1 w-full sm:w-fit rounded-full bg-orange-600 hover:bg-yellow-500 border-white mt-3'>
                            <a href="/cv/Akila_Srikantha_CV.pdf" download="Akila_Srikantha_CV">
                            <span className="block text-white hover:text-yellow-300 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">Download CV</span>
                            </a>
                        </button>
                    </span>
                    
                </div>
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { x:0,opacity: 1, scale: 1},
                    hidden: { x:50,opacity: 0, scale: 1 }
                }}
                >
            <div className='flex xs:flex-col sm:flex-col md:flex-none lg:flex-none xl:flex-none justify-center col-span-5 lg:place-self-auto mt-20 lg:mt-4 lg:mx-8'>
                <div className=' rounded-full  bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px] shadow-xl shadow-blur shadow-orange-400'>
                    <Image
                        
                        src= "/images/DP1.png"
                        alt = "DP"
                        className = "relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width = {520}
                        height = {600}
                        priority={true}
                    />
                </div>
            </div>
            </motion.div>
        </div>
    
    </section>
    
  )
}

export default HeroSection