"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul className=' list-disc'>
                <li><b>Nalanda College - Colombo 10</b></li>
                <ul>
                    <li className='pl-2'>G.C.E Ordinary Level - 2016</li>
                    <li className='pl-2'>G.C.E Advanced Level( Combined Maths, Physics, Chemistry) - 2019</li>
                </ul>
                <br></br>
                <li><b>University of Sri Jayewardenepura</b></li>
                <ul>
                    <li className='pl-2'>B.Sc. (Honours) in Computer Science(2021- Present)</li>
                </ul>

            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className=' list-disc'>
                <li><b>Director of Public Relations Committee- Rotaract Club of University of Sri Jayewardenepura( RI Year 22-23 )</b></li>
                <br></br>
                <li><b>Committee Member - Computer Science Association University of Sri jayewardenepura</b></li>
                <br></br>
                <li><b>Freelance Video Editor & Graphic Designer at Fiverr(2019 - Present)</b></li>
            </ul>
        )
    },

    {
        title: "Extracurricular Activities ",
        id: "extracurricular activities",
        content: (
            <div className='md:grid md:grid-cols-3'>
            <div className='col-span-2'>
                <ul className=' list-disc'>
                    <li ><b>Rotaract Club of University of Sri Jayewardenepura</b></li>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - Design Warrior 3.0</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Chairperson</li>
                        <a className='pl-2  text-orange-400 underline' href="/certificates/DW_racusj.pdf" download="DW_racusj">Download Certificate</a>
                    </ul>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - Be Professionally Equipped 4.0</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Public Relations Team Leader</li>
                        <a className='pl-2 text-orange-400 underline' href="/certificates/BPE_racusj.pdf" download="BPE_racusj">Download Certificate</a>
                    </ul>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - Rise Up Sri Lanka 2.0</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Public Relations Team Member</li>
                        <a className='pl-2 text-orange-400 underline' href="/certificates/RUS_racusj.pdf" download="RUS_racusj">Download Certificate</a>
                    </ul>
                    <br></br>
                    <p>
                    In the Rotary International year 2022-2023, I was appointed as the <b>Director of the Public Relations Committee</b> of the Rotaract Club of the University of Sri Jayewardenepura. During that year, two projects were carried out under our committee, and Project Someone's Daughter Vol-05 won the bronze award for the most outstanding public image initiative of 2022-23 in Rotaract District 3230 (Sri Lanka - Maldives). 
                    </p>
                    <br></br>
                    <li><b>Computer Science Association University of Sri jayewardenepura</b></li>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - CSA Project Pulse</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Chairperson</li>
                        
                    </ul>
                    <br></br>
                    
                </ul>
            </div>
            <div>
                <Image src="/images/extra/1.jpg"  className="ml-10 border border-orange-500 " width={250} height={350} alt='extra 1'/>
                <Image src="/images/extra/2.jpg"  className="ml-10 border border-orange-500 " width={250} height={350} alt='extra 1'/>
            </div>
            </div>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("education")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(()=>{
                setTab(id)
            })
    }
  return (
    <section id="about" className='text-white py-0'>
        <div className=' md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-0 sm:py-16 xl:px-16'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: {opacity: 1, scale: 1},
                    hidden: {opacity: 0, scale: 0.5 }
                }}
                >
            <div className=' mt-20'>
                <Image src="/images/DP2.png"  className="" width={350} height={350} alt='about section image'/>
            </div> 
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible:{opacity: 1, scale: 1},
                    hidden: {opacity: 0, scale: 0.5 }
                }}
                >
            <div className='mt-4 md:mt-10 text-justify flex flex-col '>
                <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a diligent and goal-oriented individual with strong abilities in team working and free thinking. I successfully completed my G.C.E Ordinary Level and Advanced Level Examinations at Nalanda College, Colombo 10, Sri Lanka. Currently, I am pursuing B.Sc. (Honours) in Computer Science degree at the University of Sri Jayewardenepura.
                </p>
                <div className='flex flex-row gap-8 mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                            {" "}
                            Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {" "}
                            Experience{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("extracurricular activities")} 
                        active={tab === "extracurricular activities"}>
                            {" "}
                            Extracurricular Activities{" "}
                    </TabButton>                      
                    </div>
                    <div className ="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </motion.div>
        </div>
        
    </section>
    
  )
}

export default AboutSection