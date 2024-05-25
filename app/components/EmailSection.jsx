"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.png";
import LinkedinIcon from "../../public/linkedin-icon.png";
import FacebookIcon from "../../public/facebook-icon.png";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'


const EmailSection = () => {


    const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm("service_wfu77m6", "template_lakqdcp", form.current, {
              publicKey: "kow9aIOae0Ug-IEoJ",
            })
            .then(
              () => {Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank you!",
                text: "Your message has delivered successfully.",
                showConfirmButton: false,
                timer: 3500
              });
                form.current.reset();
              },
              (error) => {Swal.fire({
                position: "center",
                icon: "error",
                title: "Sorry...",
                text: "Something went wrong!",
                timer: 3500
              });
            },
            );

  };

  

  return (
    
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 sm:gap-20 lg:gap-60 relative"
    >
      
      <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: {x:0,opacity: 1, scale: 1},
                    hidden: {x:-50,opacity: 0, scale: 1 }
                }}
                >
      <div>
        
        <h5 className="text-3xl font-bold text-white text-center md:text-left">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 mt-4 text-justify justify-center">
          {" "}
          I&apos;m on the hunt for fresh opportunities and my inbox is eagerly awaiting your messages. Whether you have a question or simply want to drop a friendly hello, I&apos;m here and ready to connect. I promise to do my utmost to respond to each and every one of you!
        </p>
        <div className="socials flex flex-row gap-2 mb-10 justify-center md:justify-start">
          <Link href="https://github.com/Aksal00">
            <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/akila-srikantha-2693b41b9/">
            <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://web.facebook.com/profile.php?id=100015022902064">
            <Image className='hover:border-2 hover:rounded-full hover:shadow-lg hover:shadow-blur hover:shadow-orange-400' src={FacebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
      </motion.div>
      <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: {x:0,opacity: 1, scale: 1},
                    hidden: {x:50,opacity: 0, scale: 1 }
                }}
      >
      <div>
          
          <form ref={form} className="flex flex-col" onSubmit={sendEmail} id="contact-from">
          
          <div className="mb-6">
              <label
                htmlFor="firstName"
                className="text-white block mb-2 text-sm font-medium"
              >
                First Name
              </label>
              <input
                name="firstName"
                type="firstName"
                id="firstName"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Jacob"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="text-white block mb-2 text-sm font-medium"
              >
                Last Name
              </label>
              <input
                name="lastName"
                type="lastName"
                id="lastName"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Martin"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="contactNumber"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your contact number
              </label>
              <input
                name="contactNumber"
                type="contactNumber"
                id="contactNumber"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="+94XXXXXXXXX"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                type="text"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div class="group relative mt-5">
            
            
              <button
                type="submit"
                className ="hover:shadow-lg hover:shadow-blur hover:shadow-orange-500 relative bg-orange-600 hover:bg-yellow-400 text-white hover:text-black font-medium  py-2.5 rounded-full w-full"
              >
                Send Message
                
              </button>
              
            </div>
            
          </form>
          
      </div>
      
      </motion.div>
      
    </section>
   
  );
};

export default EmailSection;