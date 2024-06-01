import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import Image
 from 'next/image'
const MenuOverlay = ({ links }) => {
  return (
    
        <ul className='flex flex-col py-4 items-center md:hidden  bg-opacity-80 bg-blur bg-black-80 shadow-lg  shadow-blur transition-shadow shadow-orange-800'>
            {links.map((link,index) =>( 
                <li key={index}>
                    <NavLink href={link.path} title ={link.title}/>
                </li>
            ))}
            <div className="socials flex flex-row gap-2 my-7 py-2 px-5 justify-center md:justify-start border-t-2 border-yellow-700 border-b-3 place-content-center place-items-center">
                <Link href="https://github.com/Aksal00">
                    <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src="/github-icon.png" alt="Github Icon" width={50} height={50} priority={true}/>
                </Link>
                <Link href="https://www.linkedin.com/in/akila-srikantha-2693b41b9/">
                    <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src="/linkedin-icon.png" alt="Linkedin Icon" width={50} height={50} priority={true}/>
                </Link>
                <Link href="https://web.facebook.com/profile.php?id=100015022902064">
                    <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src="/facebook-icon.png"alt="Facebook Icon" width={50} height={50} priority={true}/>
                </Link>
                <Link href="https://x.com/akila_salinda">
                    <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src="/x-icon.png"alt="X Icon" width={50} height={50} priority={true}/>
                </Link>
                <Link href="https://youtube.com/playlist?list=PL_zkjRWwoQj-i8ftGefLnyQJ-uLVxi-ZV&si=HTZ7yvgtF9b2RoK7">
                    <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src="/youtube-icon.png"alt="Youtube Icon" width={50} height={50} priority={true}/>
                </Link>
        </div>
        </ul>
        
    
  )
}

export default MenuOverlay