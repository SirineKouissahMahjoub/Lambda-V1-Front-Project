"use client";
import AppsStatusCard from '@/components/CandidatPlatform/AppsStatusCard';
import AvailabilityDrop from '@/components/CandidatPlatform/AvailabilityDrop';
import JobCardExtended from '@/components/JobOfferComponent/JobCardExtended';
import JobCard from '@/components/JobOfferComponent/JobOffer';
import Button from '@/components/buttons/Button';
import Header from '@/components/navigation/Header';
import SidebarNav from '@/components/navigation/SidebarNav';
import React, { useState } from 'react';
import fakeJobData, { JobData } from '@/db/FakeJobData';
import fakeCompanyData from '@/db/FakeCompanyData';
import BarometreSection from '@/components/BarometreSection/BarometreSection';
import Link from 'next/link';
import Filters from '@/components/SideBarFilter/Filters';

const offres = () => {

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
    <div>
        <Header/>
        <SidebarNav/>

      <div className='ml-12'>
      <div className="top-0 flex-col xs:flex-row items-start grid  md:grid-cols-6 container mx-auto py-20 px-4 md:px-4 lg:px-6 xl:px-20">
  <div className="flexCenter md:col-span-1 order-1 xs:order-1 ">
    <Filters onFilterChange={handleFilterChange} />
  </div>
  <div className="ml-20 md:col-span-5 order-2 xs:order-2 justify-start">
    <h3 className="font-poppins bold-32 text-gray-800 text-xl mt-0 mb ml-6">Nos offres</h3>
    <div className='content-center items-center'>
        <div className="grid lg:grid-cols-2 gap-2">
        {/* Rendu des offres filtrées pour la page actuelle */}
        {currentOffers.map((job, index) => (
            <JobCardExtended
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
      </div>
    </div>
    
  )
}

export default offres;

