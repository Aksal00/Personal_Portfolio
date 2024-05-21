import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container sm:px-4 py-12 md:p-12 flex justify-between">
        <p>
            <Link href={"/"} className= "text-md md:text-3xl text-white font-light">
                <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600'>A</span>kila <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600'>S</span>rikantha
            </Link>
        </p>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;