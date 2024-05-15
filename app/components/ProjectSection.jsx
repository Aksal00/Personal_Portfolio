"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This is the project you are currently watching",
    technology_stack:"NextJs, Framer Motion, Tailwind CSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aksal00/Vidumaga---Interactive-Learning-Application-HCI",
    previewUrl: "https://github.com/Aksal00/Vidumaga---Interactive-Learning-Application-HCI",
  },
  {
    id: 2,
    title: "Vidumaga - Interactive Learning Application",
    description: "This educational application is designed to foster early childhood development through a variety of interactive activities and games. The application supports both traditional mouse input and features a hand recognition system for a truly immersive experience.",
    technology_stack:"Unity Game Engine, C#, OpenCV",
    image: "/images/projects/2.png",
    tag: ["All", "PC"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ilangam Hatana(ඉලංගම් හටන) - Multiplayer Combat Game",
    description: "Ilangam Hatana is an 2D combat game developed using Python and the Pygame library. Drawing inspiration from the rich heritage of Sinhalese martial art, this game offers players an immersive experience in a virtual battlefield.",
    technology_stack:"Python, PyGame",
    image: "/images/projects/3.png",
    tag: ["All", "PC"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "WeeCare - Women Children Safety App",
    description: "WeeCare is a React Native mobile application prioritizing the safety of women and children. This app empowers users with essential features for their well-being in emergencies.",
    technology_stack:"React Native, Expo",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Omi Warriors - Mobile Game",
    description: "Omi Warriors is a mobile game inspired by the Sri Lankan card game called 'Omi'.",
    technology_stack:"Unity Game Engine, C#",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PC"
          isSelected={tag === "PC"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technology_stack={project.technology_stack}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;