"use client";
import React from 'react';
import Image from 'next/image';
import  Button  from '@/components/buttons/Button';
import Infocard from './InfoCard';
import DataCard from './DataCard';
import group from '@/public/Icons/groups_2.svg';
import business from '@/public/Icons/business_center.svg';
import Link from 'next/link';

interface HeroSectionProps {
    title: string;
    description: string;
    illustration: string;
  }
  
  const HeroSection: React.FC<HeroSectionProps> = ({ title, description, illustration }) => {
    return (
      <section className='max-container bg-blue-900 padding-container xs:px-12 flex flex-col gap-20 py-8 pb-32 md:gap-20 lg:py-20 md:flex-row'>
        
        
        <div className='relative mt-4 z-20 flex flex-1 flex-col xl:w-1/2'>
         
          <h1 className="  text-white bold-80 sm:bold-32 mb-6 font-poppins">{title}</h1>
          
          <p className="text-lg mb-12 font-poppins text-white">{description}</p>
          <Link href={'/connexion'}>
            <div className='w-60'>
            <Button type='button' title='Rejoindre notre communauté' variant='btn_blue' />
            </div>
          </Link>
        </div>
  
       
        
        <div className='relative flex flex-1 justify-center items-center xl:w-1/2'>
          
          <Image src={illustration} alt='illustration 3d' width={450} height={450} className='relative z-20'/>
            <div className='absolute w-52 h-36 right-16 top-0  flex center justify-center items-center'>
            <Infocard developerCount={4200} />
            </div>
        <div className='md:flexCeneter flex-row'>
        <div className='absolute w-52 h-36 left-6  top-56  flex center justify-center items-center xs:z-10'>
        <DataCard
            bgColor=" bg-purple-400 opacity-60"
            iconSrc={group}
            number={274}
            text="membres cette semaine"
        />
        </div>
      <div className='absolute z-30 w-52 h-36 right-6 -bottom-10  flex center justify-center items-center'>
        <DataCard
            bgColor=" bg-emerald-400 opacity-60"
            iconSrc={business}
            number={2000}
            text={`Candidats recrutés ce mois`}
        />
        </div>
        </div>
</div>

      </section>
    );
  };
  
  export default HeroSection;