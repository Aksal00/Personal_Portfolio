"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Nalanda College</li>
                <li>University of Sri Jayewardenepura</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>Rotaract Club</li>
                <li>Computer Science Association</li>
            </ul>
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
    <section className='text-white'>
        <div className=' md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='mt-20'>
                <Image src="/images/DP2.png"  width={400} height={400}/>
            </div> 
            <div className='mt-4 md:mt-10 text-justify flex flex-col '>
                <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a diligent and goal-oriented individual with strong abilities in team working and free thinking. I successfully completed my G.C.E Ordinary Level and Advanced Level Examinations at Nalanda College, Colombo 10, Sri Lanka. Currently, I am pursuing a BSc (Hons) in Computer Science at the University of Sri Jayewardenepura.
                </p>
                <div className='flex flex-row mt-8'>
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
                    </div>
                    <div className ="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            
        </div>
    </section>
    
  )
}

export default AboutSection