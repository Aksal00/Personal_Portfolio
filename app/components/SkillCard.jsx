import React from "react";
import Image from "next/image";

const SkillCard = ({ skillName,imgUrl}) => {
  return (
    <div>
      <div className="justify-center">
        <Image 
            src={imgUrl}
            className = " translate-x-1/3"
            alt={skillName} 
            width= {82}
            height={82}
        />
        <h5 className="mt-2 text-md lg:text-xl font-semibold mb-2 text-center">{skillName}</h5>
    </div>
      
    </div>
  );
};

export default SkillCard;