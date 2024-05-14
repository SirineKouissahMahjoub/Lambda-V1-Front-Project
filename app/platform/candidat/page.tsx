import AppsStatusCard from '@/components/CandidatPlatform/AppsStatusCard';
import AvailabilityDrop from '@/components/CandidatPlatform/AvailabilityDrop';
import JobCardExtended from '@/components/JobOfferComponent/JobCardExtended';
import JobCard from '@/components/JobOfferComponent/JobOffer';
import Button from '@/components/buttons/Button';
import Header from '@/components/navigation/Header';
import SidebarNav from '@/components/navigation/SidebarNav';
import fakeJobData from '@/db/FakeJobData';
import React from 'react'

const Home = () => {

  const fourJobOffers = fakeJobData.slice(0, 4);

  return (
    <div>
        <Header/>
      <SidebarNav/>

      <div className='flexCenter gap-2'>
        <div className='w-1/2 ml-32 h-screen my-8 border-2 border-gray-50'>
          <h1 className='bold-20 font-poppins mx-2 text-gray-700'>Bienvenue <span className='text-blue-500'>Sirine</span></h1>

          <div className='border-2 border-gray-100 mx-4 my-4 px-4 py-4 rounded-lg'>
            <p className='regular-16 text-gray-600 w-auto mb-4'>Choisie votre visibilité auprés des recruteurs selon votre disponibilité :</p>
            <AvailabilityDrop/>
          </div>
          <div className='border-2 border-gray-100 mx-4 my-4 px-4 py-4 rounded-lg flex'>
            <div className='w-1/3 h-auto border-2 border-gray-100 rounded-lg mx-2 my-1 items-center content-center'>
              <h1 className='text-blue-500 bold-32 text-center px-2'>17</h1>
              <p className='text-center px-2 regular-14 text-gray-600'>nombres de candidatures soumises</p>
            </div>
            <div className='w-2/3 grid grid-cols-2'>
              <AppsStatusCard color='bg-[#f3e8ff]' status='lus'number={10}/>
              <AppsStatusCard color='bg-[#dbeafe]' status='entretien'number={2}/>
              <AppsStatusCard color='bg-[#d1fae5]' status='Validé'number={1}/>
              <AppsStatusCard color='bg-[#ffe4e6]' status='Non retenu'number={4}/>
            </div>
          </div>


           <div className='border-2 border-gray-100 w-auto h-auto mx-4 my-4 rounded-lg'>
            <p className='bold-20 mx-4 my-2 font-poppins text-gray-700'>Mes alertes</p>
            <div className='flex flex-col justify-center content-center'>
            <p className='text-center regular-16 text-gray-500 mt-6'>
              Ne ratez aucune opportunité ! Créez des alertes pour recevoir les dernières offres correspondant à vos critères.
              </p>
                <div className='w-fill mx-64 justify-center content-center mt-6 mb-12'>
                  <Button variant='btn_dark_blue_outline' title='créer une alerte' type='button' />
                </div>
              </div>
          </div> 
        </div>



        <div className='w-1/2 mr-8 h-screen my-8 border-2 border-gray-50'>
          <p className='bold-20 mx-4 my-2 font-poppins text-gray-700'>Offres d'emplois recommandées pour vous</p>
          {/* Map over jobOffers and render JobCard for each */}
          {fourJobOffers.map((job) => (
            <JobCardExtended
              key={job.id}
              id={job.id}
              title={job.title}
              companyName={job.companyName}
              contractType={job.contractType}
              location={job.location}
              remoteDays={job.remoteDays}
              salary={job.salary}
              publishedDate={job.publishedDate}
              viewCount={job.viewCount} 
              logoSrc={job.logoSrc} 
              experience={job.experience}            />
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home;
