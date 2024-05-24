"use client";
import React from 'react'
import SkillCard from './SkillCard';
import HTMLIcon from "../../public/linkedin-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion,easeIn } from "framer-motion";

const skillList = [
    {
        id: "1",
        skillName:"HTML",
        image: "/images/skills/html.png"
    },
  
    {
        id: "2",
        skillName:"CSS",
        image: "/images/skills/css.png"
    },
  
    {
        id: "3",
        skillName:"Javascript",
        image:"/images/skills/javascript.png"
    },

    {
        id: "4",
        skillName:"Python",
        image:"/images/skills/python.png"
    },

    {
        id: "5",
        skillName:"C",
        image:"/images/skills/c.png"
    },

    {
        id: "6",
        skillName:"C#",
        image:"/images/skills/csharp.png"
    },

    {
        id: "7",
        skillName:"Java",
        image:"/images/skills/java.png"
    },
    {
        id: "8",
        skillName:"Php",
        image:"/images/skills/php.png"
    },
    {
        id: "9",
        skillName:"mySQL",
        image:"/images/skills/mysql.png"
    },
    {
        id: "10",
        skillName:"MongoDB",
        image:"/images/skills/mongodb.png"
    },
    {
        id: "11",
        skillName:"React",
        image:"/images/skills/react.png"
    },
    {
        id: "12",
        skillName:"Next.js",
        image:"/images/skills/nextjs.png"
    },
    {
        id: "13",
        skillName:"Node.js",
        image:"/images/skills/nodejs.png"
    },
    {
        id: "14",
        skillName:"Unity",
        image:"/images/skills/unity.png"
    },
    {
        id: "15",
        skillName:"Figma",
        image:"/images/skills/figma.png"
    },
    {
        id: "16",
        skillName:"Photoshop",
        image:"/images/skills/ps.png"
    },
    {
        id: "17",
        skillName:"Premiere Pro",
        image:"/images/skills/pr.png"
    },
    {
        id: "18",
        skillName:"After Effects",
        image:"/images/skills/ae.png"
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