"use client"
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const SkillCard = ({ skillName,imgUrl}) => {
  return (
    <div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
      <div className="grid place-items-center">
        <Image 
            src={imgUrl}
            className = "  py-3"
            alt={skillName} 
            width= {82}
            height={82}
        />
        <h5 className=" mt-2 text-md lg:text-xl font-semibold mb-2 text-center">{skillName}</h5>
    </div>
    </motion.div>
    </div>
  );
};

export default SkillCard;