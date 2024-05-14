"use client";
import React, { useState } from 'react';
import Navbar from "@/components/navigation/Navbar";
import TitleHeroSection from "@/components/heroSection/TitleHeroSection";
import AdvantagesSection from "@/components/AdvantagesSection/Advantages";
import OtherSection from "@/components/SolutionsSections/OtherSection";
import BarometreSection from "@/components/BarometreSection/BarometreSection";
import Footer from "@/components/navigation/Footer";
import CvthequeLigne from "@/components/CvthequeComponent/CvthequeLigne";
import fakeCandidatData from '@/db/FakeCandidats';
import Image from 'next/image';
import illust from '@/public/Images/illustration_generale.png';

export default function recrutcpp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [candidatsPerPage] = useState(8);
  const candidats = fakeCandidatData;

  // Index du dernier candidat sur la page actuelle
  const indexOfLastCandidat = currentPage * candidatsPerPage;
  // Index du premier candidat sur la page actuelle
  const indexOfFirstCandidat = indexOfLastCandidat - candidatsPerPage;
  // Sélection des candidats pour la page actuelle
  const currentCandidats = candidats.slice(indexOfFirstCandidat, indexOfLastCandidat);

  // Changer de page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar/>
      <TitleHeroSection
        title="Solutions 360° pour accélérer et fiabiliser vos recrutements C/C++."
        description="Être visible au bon endroit à son importance. Là où vous êtes, peut déterminer où vous irez. Contenus, Sondages, Jobs..Tout sur l'écosystème, au même endroit."
      />
      
      <div className=' mx-20 mt-20 items-center justify-center '>
        
        <h1 className='bold-32 font-poppins text-gray-800 text-center mb-4'>Le réseau #1 de compétences C/C++</h1>
        <p className='regular-16 font-poppins text-gray-600 text-center mb-8'>+5511 utilisateurs renseignés pour accélérer vos recrutements et staffer vos équipes, +2 utilisateurs sur les dernières 24h.</p>
        <div className='flexCenter'>
                <div className="grid-cols-1 gap-0 items-center border-2 border-gray-200 w-max rounded-lg">

                <div className='flex gap-16 text-gray-500 regular-14'>
                <p>Candidat</p>
                <p>Séniorité</p>
                <p>Département</p>
                <p>Compétences</p>
                <p>Secteur d'activité</p>
            </div>
                    {currentCandidats.map(candidat => (
                    <CvthequeLigne
                        key={candidat.id}
                        id={candidat.id}
                        name={candidat.name}
                        image={candidat.image}
                        experience={candidat.experience}
                        location={candidat.location}
                        competences={candidat.competences}
                        sector={candidat.sector}
                        disponibilite={candidat.disponibilite}
                    />
                    ))}
                </div>
            </div>
            
        </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4 mb-20">
        {Array(Math.ceil(candidats.length / candidatsPerPage)).fill(null).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-md">
            {index + 1}
          </button>
        ))}
      </div>
      <AdvantagesSection/>
      <div className='mx-20 my-20 bg-white flexCenter'>
        <Image src={illust} alt='illustration du job board' width={800} height={400}/>
      </div>
      <BarometreSection/>
      <Footer/>
    </>
  );
  
}
