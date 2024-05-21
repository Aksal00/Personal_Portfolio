import React from 'react'
import Link from "next/link";
import Image from "next/image";

const SocialmediaCard = ({imgUrl,name,link}) => {
  return (
    <Link href={link}>
      <button className=' hover: shadow-gray-200'>
        <Image 
                src={imgUrl}
                className = ""
                alt= {name} 
                width={72} 
                height={72}
        />
      </button>
        
    </Link>
  )
}

export default SocialmediaCard