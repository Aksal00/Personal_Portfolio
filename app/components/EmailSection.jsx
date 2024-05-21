"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import FacebookIcon from "../../public/facebook-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  /*const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName:e.target.firstName.value,
      lastName:e.target.lastName.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData)

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
    */
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_wfu77m6", "template_lakqdcp", form.current, {
          publicKey: "kow9aIOae0Ug-IEoJ",
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div>
        <h5 className="text-3xl font-bold text-white ">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 mt-4 max-w-md text-justify">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Aksal00">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/akila-srikantha-2693b41b9/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://web.facebook.com/profile.php?id=100015022902064">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
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
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div class="group relative mt-5">
            <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 opacity-0 blur transition duration-200 group-hover:opacity-90"></div>
              <button
                type="submit"
                className =" relative bg-orange-600 hover:bg-yellow-500 text-white hover:text-black font-medium  py-2.5 px-5 rounded-full w-full"
              >
                Send Message
                
              </button>
              
            </div>
            
          </form>
        
      </div>
    </section>
  );
};

export default EmailSection;