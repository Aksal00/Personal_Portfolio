import React from "react";
import { CodeBracketIcon, EyeIcon, PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Content } from "next/font/google";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description,technology_stack,gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000 ">
        
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-8 border-2 hover:border-4 relative rounded-full border-[#ADB7BE] hover:border-yellow-400 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-yellow-400" />
          </Link>
          
          <Link
            href={previewUrl}
            className="relative bg-opacity-80  border-2 rounded-full  hover:bg-opacity-70 border-[#ADB7BE] hover:border-yellow-400 group/link"
          >
            <div className="px-3 flex flex-row content-center ">
            <h1 className="my-2 font-bold text-xl relative rounded-full text-[white] group-hover/link:text-yellow-400">WATCH NOW</h1>
            <PlayIcon className="relative fill-white group-hover/link:fill-yellow-400 h-10 w-10  text-opacity-30   transform translate-x-1 translate-y-0.5  cursor-pointer group-hover/link:text-yellow-400" />
            </div>
          </Link>
          
        </div>
        
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-justify">{description}</p>
        <br/>
        <p>
            <span className="text-white">Technologies & tools : </span>
            <span className="text-[#ffda36]">{technology_stack}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;