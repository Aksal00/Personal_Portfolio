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
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible:{y:0,opacity: 1, scale: 1},
                            hidden: {y:-40,opacity: 0, scale: 1 }
                        }}>
            <div>
            <ul className=' list-disc '>
                <li><b>Nalanda College - Colombo 10</b></li>
                <ul>
                    <li className='pl-2'>G.C.E Ordinary Level - 2016</li>
                    <li className='pl-2'>G.C.E Advanced Level( Combined Maths, Physics, Chemistry) - 2019</li>
                </ul>
                <br></br>
                <li className='text-nowrap'><b>University of Sri Jayewardenepura</b></li>
                <ul>
                    <li className='pl-2'>B.Sc. (Honours) in Computer Science</li>
                </ul>

            </ul>
            </div></motion.div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            
            <div>
                <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible:{y:0,opacity: 1, scale: 1},
                            hidden: {y:-40,opacity: 0, scale: 1 }
                        }}>
            <ul className=' list-disc'>
                <li><b>Software Engineer (Internship) - Wiley Global Technology</b></li>
                <br></br>
                <li><b>Director of Public Relations Committee- Rotaract Club of University of Sri Jayewardenepura( RI Year 22-23 )</b></li>
                <br></br>
                <li><b>Committee Member - Computer Science Association University of Sri jayewardenepura</b></li>
                <br></br>
                <li><b>Freelance Video Editor & Graphic Designer at Fiverr(2019 - Present)</b></li>
            </ul>
            </motion.div>
            </div>
            
            
        )
    },

    {
        title: "Extracurricular Activities ",
        id: "extracurricular activities",
        content: (
           
            <div className='md:grid lg:grid-cols-3'>
            <div className='col-span-2'>
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible:{y:0,opacity: 1, scale: 1},
                            hidden: {y:-40,opacity: 0, scale: 1 }
                        }}>
                
                <ul className=' list-disc'>
                    <li ><b>Rotaract Club of University of Sri Jayewardenepura</b></li>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - Design Warrior 3.0</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Chairperson</li>
                        <a className='pl-2  text-orange-400 hover:text-yellow-400' href="/certificates/DW_racusj.pdf" download="DW_racusj"><button className='underline'>Download Certificate</button></a>
                    </ul>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - Be Professionally Equipped 4.0</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Public Relations Team Leader</li>
                        <a className='pl-2 text-orange-400 hover:text-yellow-400' href="/certificates/BPE_racusj.pdf" download="BPE_racusj"><button className='underline'>Download Certificate</button></a>
                    </ul>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - Rise Up Sri Lanka 2.0</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Public Relations Team Member</li>
                        <a className='pl-2 text-orange-400 hover:text-yellow-400' href="/certificates/RUS_racusj.pdf" download="RUS_racusj"><button className='underline'>Download Certificate</button></a>
                    </ul>
                    <br></br>
                    <p>
                    In the Rotary International year 2022-2023, I was appointed as the <b>Director of the Public Relations Committee</b> of the Rotaract Club of the University of Sri Jayewardenepura. During that year, two projects were carried out under our committee, and Project &quot;Someone&apos;s Daughter Vol-05&quot; won the <b>bronze award for the most outstanding public image initiative</b> of 2022-23 in Rotaract District 3230 (Sri Lanka - Maldives). 
                    </p>
                    <br></br>
                    <li><b>Computer Science Association University of Sri jayewardenepura</b></li>
                    <ul className='pt-3'>
                        <li className='pl-2'><b>Project</b> - CSA Project Pulse</li>
                        <li className='pl-2 pb-1'><b>Position</b> - Chairperson</li>
                        
                    </ul>
                    <br></br>
                    
                </ul>
                </motion.div>
            </div>
            <div className='sm:ml-0 md:ml-10 place-content-center place-items-center justify-center mx-10 md:mx-0'>
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible:{y:0,opacity: 1, scale: 1},
                            hidden: {y:-40,opacity: 0, scale: 1 }
                        }}>
                
                    <Image src="/images/extra/1.jpg"  className=" border border-orange-500 " width={250} height={350} alt='extra 1'/>
                    
                    <Image src="/images/extra/2.jpg"  className=" border border-orange-500 " width={250} height={350} alt='extra 2'/>
                    
                    <Image src="/images/extra/3.jpg"  className=" border border-orange-500 " width={250} height={350} alt='extra 3'/>
            </motion.div>
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
        <div className=' md:grid md:grid-cols-2 gap-8  py-8 px-0 xl:gap-0 sm:py-16 xl:px-16'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: {x:0,opacity: 1, scale: 1},
                    hidden: {x:-50,opacity: 0, scale: 1 }
                }}
                >
            <div className='flex mt-20 justify-center'>
                <Image src="/images/DP2.png"  className="border-5  rounded-full shadow-xl shadow-blur shadow-orange-400" width={450} height={450} alt='about section image' priority={true}/>
            </div> 
            </motion.div>
            
            <div className='mt-10 md:mt-10 text-justify'>
                <h2 className='text-center md:text-left text-4xl font-bold text-white mb-4 '>About Me</h2>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible:{x:0,opacity: 1, scale: 1},
                    hidden: {x:50,opacity: 0, scale: 1}
                }}
                >
                <p className='text-md lg:text-lg text-[#d1d1d1]'>
                I am a passionate and highly motivated computer science undergraduate at the University of Sri Jayewardenepura. My primary focus is on full stack development, where I enjoy creating dynamic and responsive web applications. In addition to my expertise in full stack development, I have skills in UI/UX design, mobile application development, game development, video editing, and graphic designing. I thrive on learning new technologies and continuously improving my skill set to create innovative and user-friendly digital solutions.
                </p></motion.div>
                <div className='relative flex flex-wrap md:flex-row gap-0 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-4 mt-8  justify-center'>
                    
                    <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        visible:{x:0,opacity: 1, scale: 1},
                                        hidden: {x:50,opacity: 0, scale: 1 }
                                    }}
                                    >
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}>
                                
                                {" "}
                                Education{" "}
                        </TabButton></motion.div>
                    
                    <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        visible:{x:0,opacity: 1, scale: 1},
                                        hidden: {x:50,opacity: 0, scale: 0.6 }
                                    }}
                                    >
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {" "}
                            Experience{" "}
                    </TabButton></motion.div>
                    
                    <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        visible:{x:0,opacity: 1, scale: 1},
                                        hidden: {x:50,opacity: 0, scale: 1 }
                                    }}
                                    >
                    
                        <TabButton 
                            selectTab={() => handleTabChange("extracurricular activities")} 
                            active={tab === "extracurricular activities"}>
                                {" "}
                                Extracurricular Activities{" "}
                        </TabButton></motion.div>
                                         
                    </div>
                    
                    <div className ="mt-8"><motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible:{y:0,opacity: 1, scale: 1},
                            hidden: {y:-50,opacity: 0, scale: 1 }
                        }}
                        >{TAB_DATA.find((t) => t.id === tab).content}</motion.div></div>
                </div>

            
        </div>
        
    </section>
    
  )
}

export default AboutSection