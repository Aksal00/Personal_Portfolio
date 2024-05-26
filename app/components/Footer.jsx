import React from "react";
import Link from 'next/link'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer flex flex-col border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container sm:px-4 pt-5 pb-3 flex justify-center">
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
        </div>
        <div className="flex justify-center pb-3"><p className="text-slate-500">All rights reserved.&nbsp;</p>
        <Image 
                className='' 
                src="/logo_icons/copyright-symbol.png" 
                alt="copyright-symbol" 
                width={23} 
                height={10} 
            />
        <p className="text-slate-500">&nbsp;2024</p>
        </div>
        
      
    </footer>
  );
};

export default Footer;