import React from "react";
import Link from 'next/link'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container sm:px-4 py-12 md:p-12 flex justify-between">
        <p>
        <Link href={"/"} className="flex items-center text-xl md:text-3xl text-white font-light">
            <Image 
                className='hover:border-2 hover:border-orange-500 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' 
                src="/logo_icons/icon_A.png" 
                alt="Portfolio Icon" 
                width={35} 
                height={35} 
            />
            <span className='ml-0'>kila&nbsp;</span>
            
            <Image 
                className='hover:border-2 hover:border-orange-500 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' 
                src="/logo_icons/icon_S.png" 
                alt="Portfolio Icon" 
                width={35} 
                height={35} 
            />
            
            <span>rikantha</span>
        </Link>
        </p>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;