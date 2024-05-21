import React from "react";
import Image from "next/image";

const SkillCard = ({ skillName,imgUrl}) => {
  return (
    <div>
      <div className="">
        <Image 
            src={imgUrl}
            className = "md:translate-x-1/4"
            alt={skillName} 
            width={72} 
            height={72}
        />
        <h5 className="mt-2 text-md lg:text-xl font-semibold mb-2 text-center">{skillName}</h5>
    </div>
      
    </div>
  );
};

export default SkillCard;