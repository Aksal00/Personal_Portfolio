import Image from "next/image";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "./components/SkillsSection";
import SocialMediaDetails from "./components/SocialMediaDetails";


export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] w-full px-12">
      <Navbar/>
      <span className="container mt-24 mx-auto  py-4">
        <HeroSection/>
        <SocialMediaDetails/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <AchievementsSection />
        <EmailSection/>
        
        <Footer/>
      </span>
    </main>
  );
}
