"use client";
import React from 'react';
import Image from 'next/image';
import  Button  from '@/components/buttons/Button';

interface OtherSectionProps {
    title: string;
    description: string;
    illustration: string;
  }
  
  const OtherSection: React.FC<OtherSectionProps> = ({ title, description, illustration }) => {
    return (
      <section className='max-container bg-white padding-container my-10 xs:px-12 flexCenter flex-col gap-20 py-8 pb-32 md:gap-20 lg:py-20 md:flex-row'>
        
        <div className='relative flex flex-1 justify-center items-center xl:w-1/2'>
          
          <Image src={illustration} alt='illustration 3d' width={450} height={450} className='relative z-20'/>
        </div>

        <div className='relative mt-4 z-20 flex flex-1 flex-col xl:w-1/2'>
         
          <h2 className="  text-gray-800 bold-40 sm:bold-20 mb-6 font-poppins">{title}</h2>
          
          <p className="text-lg mb-12 font-poppins text-gray-600">{description}</p>
         
          <div className='w-60'>
          <Button type='button' title='Rejoindre notre communauté' variant='btn_blue'/>
        </div>
        </div>

      </section>
    );
  }; export default OtherSection;
