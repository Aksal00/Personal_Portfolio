"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';




const SocialmediaCard = ({imgUrl,name,link}) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
    <Link href={link}>
      
      <button className=''>
      {isHovering ? (
        <Image 
                src={imgUrl}
                className ="border-4 rounded-full shadow-lg shadow-blur shadow-orange-400"
                alt= {name} 
                width={72} 
                height={72}
        />):
        (
          <Image 
                src={imgUrl}
                className =""
                alt= {name} 
                width={72} 
                height={72}
        />
        )}
      </button>
      
        
    </Link>
    </div>  
  )
}

export default SocialmediaCard