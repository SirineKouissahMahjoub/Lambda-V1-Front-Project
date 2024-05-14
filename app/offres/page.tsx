"use client";
import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import JobOffer from '@/components/JobOfferComponent/JobOffer';
import JobSection from '@/components/JobSections/JobSections';
import fakeJobData, { JobData } from '@/db/FakeJobData';
import AdvantagesSection from '@/components/AdvantagesSection/Advantages';
import CompanySection from '@/components/CompaniesSection/CompaniesSection';
import fakeCompanyData from '@/db/FakeCompanyData';
import BarometreSection from '@/components/BarometreSection/BarometreSection';
import Footer from '@/components/navigation/Footer';
import Link from 'next/link';
import SimpleHeroSection from '@/components/heroSection/SimpleHeroSection';
import Filters from '@/components/SideBarFilter/Filters';

export default function Offres() {
  const [filteredOffers, setFilteredOffers] = useState(fakeJobData); // Initialisez avec toutes les offres
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle, commençant par la page 1
  const offersPerPage = 14; // Nombre d'offres par page

  const handleFilterChange = (filters: any) => {
    let filtered = fakeJobData;

    Object.keys(filters).forEach((filterType) => {
      if (filters[filterType] && filters[filterType].length > 0) {
        filtered = filtered.filter((job) => filters[filterType].includes(job[filterType]));
      }
    });

    setFilteredOffers(filtered);
  };

  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = filteredOffers.slice(indexOfFirstOffer, indexOfLastOffer);

  // Change la page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <SimpleHeroSection
        description="Être visible au bon endroit à son importance. Là où vous êtes, peut déterminer où vous irez. Contenus, Sondages, Jobs..Tout sur l'écosystème, au même endroit."
      />

<div className="top-0 flex-col xs:flex-row items-start grid  md:grid-cols-6 container mx-auto py-20 px-4 md:px-4 lg:px-6 xl:px-20">
  <div className="flexCenter md:col-span-1 order-1 xs:order-1 ">
    <Filters onFilterChange={handleFilterChange} />
  </div>
  <div className="ml-20 md:col-span-5 order-2 xs:order-2 justify-start">
    <h3 className="font-poppins bold-32 text-gray-800 text-xl mt-0 mb ml-6">Nos offres</h3>
    <div className="grid lg:grid-cols-2 gap-2 px-2">
      {/* Rendu des offres filtrées pour la page actuelle */}
      {currentOffers.map((job, index) => (
        <JobOffer
          id={job.id}
          key={index}
          logoSrc={job.logoSrc}
          title={job.title}
          companyName={job.companyName}
          contractType={job.contractType}
          location={job.location}
          remoteDays={job.remoteDays}
          salary={job.salary}
          experience={job.experience}
          publishedDate={job.publishedDate}
          viewCount={job.viewCount}
          
        />
      ))}
    </div>
    {/* Pagination */}
    <div className="flex justify-center mt-6">
      {[...Array(Math.ceil(filteredOffers.length / offersPerPage))].map((_, index) => (
        <button key={index} className="mx-1 px-3 py-1 border border-gray-400 rounded-md" onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  </div>
</div>


      <AdvantagesSection />
      <CompanySection companyDataArray={fakeCompanyData} />
      <BarometreSection />
      <Footer />
    </>
  );
}
