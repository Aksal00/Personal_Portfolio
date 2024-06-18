"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion, useInView,useState } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Freelance Projects",
    value: "60",
    postfix: "+",
  },

  {
    metric: "Foreign Clients",
    value: "35+",
    postfix: "+",
  },

  {
    metric: "Years of experience",
    value: "4",
    postfix: "+",
  },
];




const AchievementsSection = () => {
  return (

    <motion.div
      initial="hidden"
      whileInView="visible"
      
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        visible: { x:0,opacity: 1, scale: 1},
        hidden: { x:-50,opacity: 0, scale: 1 }
      }}
    >
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
      <div className="shadow-md shadow-blur shadow-orange-400 sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col md:flex-row items-center justify-between">
      <h2 className="text-center text-3xl md:text-4xl font-bold  mt-4 mb-4 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600">
        As a Freelance Video Editor
      </h2>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-center">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
    </motion.div>
  );
};

export default AchievementsSection;