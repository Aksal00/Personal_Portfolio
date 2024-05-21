"use client";
import React from 'react'
import SkillCard from './SkillCard';
import HTMLIcon from "../../public/linkedin-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const skillList = [
    {
        id: "1",
        skillName:"HTML",
        image: "/images/skills/html.svg"
    },
  
    {
        id: "2",
        skillName:"CSS",
        image: "/images/skills/css.svg"
    },
  
    {
        id: "3",
        skillName:"Javascript",
        image:HTMLIcon
    },

    {
        id: "4",
        skillName:"Python",
        image:HTMLIcon
    },

    {
        id: "5",
        skillName:"C",
        image:HTMLIcon
    },

    {
        id: "6",
        skillName:"C#",
        image:HTMLIcon
    },

    {
        id: "7",
        skillName:"Java",
        image:HTMLIcon
    },
    {
        id: "8",
        skillName:"Php",
        image:HTMLIcon
    },
    {
        id: "9",
        skillName:"mySQL",
        image:HTMLIcon
    },
    {
        id: "10",
        skillName:"MongoDB",
        image:HTMLIcon
    },
    {
        id: "11",
        skillName:"React",
        image:HTMLIcon
    },
    {
        id: "12",
        skillName:"Next.js",
        image:HTMLIcon
    },
    {
        id: "13",
        skillName:"Node.js",
        image:HTMLIcon
    },
    {
        id: "14",
        skillName:"Unity",
        image:HTMLIcon
    },
    {
        id: "15",
        skillName:"Figma",
        image:HTMLIcon
    },
    {
        id: "16",
        skillName:"Photoshop",
        image:HTMLIcon
    },
    {
        id: "17",
        skillName:"Premiere Pro",
        image:HTMLIcon
    },
    {
        id: "18",
        skillName:"After Effects",
        image:HTMLIcon
    },
    

  ];

const SkillsSection = () => {
    return (  
    <section id="skills" className="py-8">
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> 
            <h2 className="text-center text-4xl font-bold  mt-4 mb-4 md:mb-4 text-transparent text-white">
                    Skills
            </h2>   
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-8">
                <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-10">
                    {skillList.map((skill, index) => (
                        <SkillCard
                            key={skill.id}
                            imgUrl={skill.image}
                            skillName={skill.skillName}
                        
                        />
                    ))}
                </ul>
            </div>
        </div>
    </section>

    )
}

export default SkillsSection