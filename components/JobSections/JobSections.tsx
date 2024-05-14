import React from 'react';
import JobOffer from '@/components/JobOfferComponent/JobOffer';
import Button from '../buttons/Button';
import JobCard from '@/components/JobOfferComponent/JobOffer';
import Link from 'next/link';

interface JobData {
  id:number;
  logoSrc: string;
  title: string;
  companyName: string;
  contractType: string;
  location: string;
  remoteDays: string;
  salary: string;
  experience: string,
  sector: string;
  competence:string,
  publishedDate: string;
  viewCount: number;
}

interface JobSectionProps {
  jobDataArray: JobData[];
}

const JobSection: React.FC<JobSectionProps> = ({ jobDataArray }) => {
  const limitedJobDataArray = jobDataArray.slice(0, 6);
  return (
    <section className="container mx-auto py-20 px-4 md:px-4 lg:px-6 xl:px-8">
      <div className="flex flex-col mb-5 justify-center items-center">
            <h3 className="text-gray-700 text-3xl font-bold font-poppins text-center">Offres d'emploi en vedette</h3>
            <p className="text-gray-700 text-opacity-80 text-lg font-medium font-poppins text-center">Il est essentiel d’être visible au bon endroit, au bon moment auprès de la bonne cible.</p>
        </div>

      <div className="job-cards items-center justify-center grid grid-flow-col gap-4">
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 auto-rows-auto gap-1'>
        {limitedJobDataArray.map((jobData, index) => (
          <JobOffer
          id={jobData.id}
            key={index}
            logoSrc={jobData.logoSrc}
            title={jobData.title}
            companyName={jobData.companyName}
            contractType={jobData.contractType}
            location={jobData.location}
            remoteDays={jobData.remoteDays}
            salary={jobData.salary}
            experience={jobData.experience}
            publishedDate={jobData.publishedDate}
            viewCount={jobData.viewCount}
          />
        ))}
        </div>
      </div>
      <div className='flexCenter mt-6 mb-8'>
        <Link href={'/offres'}>
      <Button type='button' title="Voir toutes les offres d'emploi" variant='btn_blue'/>
      </Link>
      </div>
    </section>
  );
};

export default JobSection;
