"use client";
import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import AdvantagesSection from '@/components/AdvantagesSection/Advantages';
import fakeCompanyData from '@/db/FakeCompanyData';
import BarometreSection from '@/components/BarometreSection/BarometreSection';
import Footer from '@/components/navigation/Footer';
import Link from 'next/link';
import SimpleHeroSection from '@/components/heroSection/SimpleHeroSection';
import CompanyCard from '@/components/CompanyCard/CompanyCard';

export default function Entreprises() {
  const companiesPerPage = 9; // Nombre d'entreprises par page
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle, commençant par la page 1

  // Calcule l'index de début de la tranche de données d'entreprise pour la page actuelle
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = fakeCompanyData.slice(indexOfFirstCompany, indexOfLastCompany);

  // Change la page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <SimpleHeroSection
        description="Être visible au bon endroit à son importance. Là où vous êtes, peut déterminer où vous irez. Contenus, Sondages, Jobs..Tout sur l'écosystème, au même endroit."
      />
      <section className="container mx-auto py-20 px-4 md:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col mb-5 justify-center items-center">
          <h3 className="text-gray-700 text-3xl font-bold font-poppins text-center">Nos Partenaires Entreprises</h3>
          <p className="text-gray-700 text-opacity-80 text-center text-lg font-medium font-poppins">Découvrez ces entreprises qui font la une.</p>
        </div>
        <div className="company-cards items-center justify-center grid grid-flow-col gap-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 auto-rows-auto gap-1">
            {currentCompanies.map((companyData, index) => (
              <CompanyCard
                key={index}
                companyData={companyData}
              />
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {[...Array(Math.ceil(fakeCompanyData.length / companiesPerPage))].map((_, index) => (
            <button key={index} className="mx-1 px-3 py-1 border border-gray-400 rounded-md" onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>
      <BarometreSection />
      <Footer />
    </>
  );
}

