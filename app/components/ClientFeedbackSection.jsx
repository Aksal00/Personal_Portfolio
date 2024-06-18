"use client";
import React, { useState, useRef } from "react";
import FeedbackCard from "./FeedbackCard";
import { motion, useInView } from "framer-motion";

const FeedbackList = [
    {
        id: "1",
        feedback:"feedback 1",
        image: "/images/reviews/1.png"
    },
  
    {
        id: "2",
        feedback:"feedback 2",
        image: "/images/reviews/2.png"
    },
    {
        id: "3",
        feedback:"feedback 3",
        image: "/images/reviews/3.png"
    },
  
    {
        id: "4",
        feedback:"feedback 4",
        image: "/images/reviews/4.png"
    },
    {
        id: "5",
        feedback:"feedback 5",
        image: "/images/reviews/5.png"
    },
  
    {
        id: "6",
        feedback:"feedback 6",
        image: "/images/reviews/6.png"
    },
    {
        id: "7",
        feedback:"feedback 7",
        image: "/images/reviews/7.png"
    },
  
    {
        id: "8",
        feedback:"feedback 8",
        image: "/images/reviews/8.png"
    },
    {
        id: "9",
        feedback:"feedback 9",
        image: "/images/reviews/9.png"
    },
  
    {
        id: "10",
        feedback:"feedback 10",
        image: "/images/reviews/10.png"
    },
    {
        id: "11",
        feedback:"feedback 11",
        image: "/images/reviews/11.png"
    },
];

const ClientFeedbackSection = () => {
  return (
    <section id="client_reviews" className="py-5">
            <div className="py-8 sm:px-4 xl:gap-16 sm:py-10 xl:px-16"> 
                <h2 className="text-center text-4xl font-bold  mt-4 mb-4 md:mb-4 text-transparent text-white">
                    Reviews from Clients
                </h2>   
                <div className="sm:border-[#33353F] sm:border rounded-md py-5 px-0 md:px-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-10">
                        {FeedbackList.map((feedback, index) => (
                            <FeedbackCard
                                key={feedback.id}
                                imgUrl={feedback.image}
                                feedback={feedback.feedback}
                            
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default ClientFeedbackSection