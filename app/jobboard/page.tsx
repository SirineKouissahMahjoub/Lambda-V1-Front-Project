"use client";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navigation/Navbar";
import image from '@/public/Images/Illustration1.svg';
import AdvantagesSection from "@/components/AdvantagesSection/Advantages";
import BarometreSection from "@/components/BarometreSection/BarometreSection";
import Footer from "@/components/navigation/Footer";
import Link from "next/link";
import SimpleHeroSection from "@/components/heroSection/SimpleHeroSection";
import illustration from "@/public/Images/jobboard_illust.png";
import JobBoardsection from "@/components/SolutionsSections/JobBoardsection";
import OtherSection from "@/components/SolutionsSections/OtherSection";

export default function jobboard() {

  return (
<>
    <Navbar/>
    <SimpleHeroSection
    description="Être visible au bon endroit à son importance. Là où vous êtes, peut déterminer où vous irez. Contenus, Sondages, Jobs..Tout sur l'écosystème, au même endroit."
    />
    <JobBoardsection
    title="Diffusez. Collectez. Traitez. Analysez."
    description="Publiez vos annonces. Collectez des candidatures. Traitez vos candidatures. Analysez l’éfficacité de vos annonces par rapport à vos concurrents."
    illustration="/Images/jobboard_illust.png"/>
    <AdvantagesSection/>
    <OtherSection
        title="Diffusez. Collectez. Traitez. Analysez."
        description="Publiez vos annonces. Collectez des candidatures. Traitez vos candidatures. Analysez l’éfficacité de vos annonces par rapport à vos concurrents."
        illustration="/Images/jobboard_illust2.png"
    />
    
    

    <BarometreSection/>
    <Footer/>
</>

  );
}
