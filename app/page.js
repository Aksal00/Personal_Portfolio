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
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <SocialMediaDetails/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <AchievementsSection />
        <EmailSection/>
        
        <Footer/>
      </div>
    </main>
  );
}
