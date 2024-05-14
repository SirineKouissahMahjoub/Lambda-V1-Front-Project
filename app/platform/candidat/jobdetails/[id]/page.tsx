"use client";
import React, { useRef } from 'react';
import Bandecolore from '@/components/JobDetailsComponent/Bandecolore';
import ApplicationForm from '@/components/JobDetailsComponent/PostulerSection';
import Stickers from '@/components/JobDetailsComponent/stickers';
import JobCardExtended from '@/components/JobOfferComponent/JobCardExtended';
import Button from '@/components/buttons/Button';
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import Navbar from '@/components/navigation/Navbar';
import SidebarNav from '@/components/navigation/SidebarNav';
import fakeCandidatData from '@/db/FakeCandidats';
import fakeJobData from '@/db/FakeJobData';
import Image from 'next/image';

const Jobdetails = async ({ params } : { params : { id:string } }) => {
  const candidatId = 1; 
  const candidat = fakeCandidatData.find((c) => c.id === candidatId);
  const SingleJob = fakeJobData.find((JobData) => JobData.id.toString() == params.id);
  
  const applicationFormRef = useRef<HTMLDivElement>(null);

  const handlePostulerClick = () => {
    if (applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <SidebarNav />
      <div className='ml-24'>
        <Bandecolore contractType={SingleJob?.contractType} />

        <div className='mx-20 my-6 flex items-start gap-4'>
          <div className='border-2 border-gray-100 rounded-lg w-auto px-6 py-6 h-auto'>
            <div className='flex my-2'>
              <Image src={SingleJob?.logoSrc} alt='logo' width={90} height={90} className='border-2 border-gray-100 rounded-md' />
              <div className='mx-4'>
                <h1 className='bold-20 text-gray-800'>{SingleJob?.title}</h1>
                <p className='medium-16 text-gray-600 mt-2'>{SingleJob?.companyName}</p>
              </div>
            </div>

            <div className='flex gap-2 my-4'>
              <Stickers title={SingleJob?.contractType} />
              <Stickers title={SingleJob?.location} />
              <Stickers title={SingleJob?.remoteDays} />
              <Stickers title={SingleJob?.salary} />
              <Stickers title={SingleJob?.experience} />
            </div>
            <div className='my-8 w-auto'>
              <p className='regular-16 text-gray-800'>{SingleJob?.description}</p>
            </div>
          </div>

          <div className='border-2 border-gray-100 rounded-lg w-auto h-auto'>
            <div className='my-4'>
              <div className='mx-4'>
                <h1 className='bold-20 text-gray-800'>{SingleJob?.title}</h1>
                <p className='medium-16 text-gray-600'>{SingleJob?.companyName}</p>
                <h1 className='bold-16 text-gray-800'>Publié par</h1>
                <p className='medium-16 text-gray-600'>{SingleJob?.companyName} recruteur</p>
              </div>
              <div className='flexCenter gap-2 my-4'>
                <Stickers title={SingleJob?.contractType} />
                <Stickers title={SingleJob?.location} />
                <Stickers title={SingleJob?.salary} />
              </div>
              <div className='mx-4 my-4 flex gap-4'>
                <Button
                  type='button'
                  title="découvrir l'entreprise"
                  variant='btn_dark_blue_outline'
                />
                <Button
                  type='button'
                  title='postuler'
                  variant='btn_blue'
                  onClick={handlePostulerClick}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={applicationFormRef}>
          <ApplicationForm userEmail={candidat?.email ?? ''} />
        </div>

        <div className='h-auto w-auto border-2 border-gray-100 rounded-lg mx-20 mb-20'>
          <h1 className='mx-8 my-8 bold-20 text-gray-700 font-poppins'>Offres d'emploi recommandées pour vous</h1>
          <div className='flex flex-wrap items-center justify-center mb-4'>
            {[...Array(4)].map((_, index) => (
              <div className='w-1/2 p-4' key={index}>
                <JobCardExtended
                  logoSrc={fakeJobData[index]?.logoSrc}
                  title={fakeJobData[index]?.title}
                  companyName={fakeJobData[index]?.companyName}
                  contractType={fakeJobData[index]?.contractType}
                  location={fakeJobData[index]?.location}
                  salary={fakeJobData[index]?.salary}
                  experience={fakeJobData[index]?.experience}
                  viewCount={fakeJobData[index]?.viewCount}
                  publishedDate={fakeJobData[index]?.publishedDate}
                  remoteDays={fakeJobData[index]?.remoteDays}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobdetails;

