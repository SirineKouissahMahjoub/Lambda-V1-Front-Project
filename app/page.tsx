"use client";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navigation/Navbar";
import JobOffer from '@/components/JobOfferComponent/JobOffer';
import image from '@/public/Images/Illustration1.svg';
import JobSection from "@/components/JobSections/JobSections";
import fakeJobData, { JobData } from '@/db/FakeJobData';
import AdvantagesSection from "@/components/AdvantagesSection/Advantages";
import CompanySection from "@/components/CompaniesSection/CompaniesSection";
import fakeCompanyData from "@/db/FakeCompanyData";
import BarometreSection from "@/components/BarometreSection/BarometreSection";
import Footer from "@/components/navigation/Footer";
import Link from "next/link";

export default function Home() {

  return (
<>
    <Navbar/>
    <HeroSection
    illustration="/Images/Illustration1.svg"
    title="Plateforme dédiée aux spécialistes du C++"
    description="Être visible au bon endroit à son importance. Là où vous êtes, peut déterminer où vous irez. Contenus, Sondages, Jobs..Tout sur l'écosystème, au même endroit."
    />
    <JobSection jobDataArray={fakeJobData}/>
    <AdvantagesSection/>
    <CompanySection companyDataArray={fakeCompanyData}/>
    <BarometreSection/>
    <Footer/>
</>

  );
}
