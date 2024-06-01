"use client"
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const FeedbackCard = ({feedback,imgUrl}) => {
  return (
    <div>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.3 }
          }}
        >
      <div className="grid place-items-center sm:border-4 border-orange-400 rounded-xl relative bg-white  bg-cover w-full h-auto md:h-[200px] lg:h-[300px] xl:h-[300px] shadow-lg shadow-blur shadow-orange-400">
        <Image 
            src={imgUrl}
            className = "relative w-full h-auto border-4 border-orange-400 sm:border-none"
            alt={feedback} 
            width= {400}
            height={300}
        />
        
    </div>
    </motion.div>
    </div>
  );
};

export default FeedbackCard;