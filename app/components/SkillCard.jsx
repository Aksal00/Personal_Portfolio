"use client"
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const SkillCard = ({ skillName,imgUrl}) => {
  return (
    <div>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
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