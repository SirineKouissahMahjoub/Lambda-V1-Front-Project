import React from 'react';
import Button from '../buttons/Button';
import coding from '@/public/Icons/coding.svg';
import search from '@/public/Icons/search_check_.svg';
import visibility from '@/public/Icons/visibility_icon.svg';
import Image from 'next/image';
import CompanyCard from '../CompanyCard/CompanyCard';
import fakeCompanyData from '@/db/FakeCompanyData';
import Link from 'next/link';

const AdvantagesSection = () => {
  return (
    <div className="max-container bg-blue-900 padding-container xs:px-4 flex flex-col border-0 border-blue-900 py-20 pb-20 justify-start items-center gap-16">
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-3xl font-bold font-poppins text-center">Soyez visible au bon endroit</h3>
            <p className="text-white text-opacity-80 text-lg font-medium font-poppins text-center">Il est essentiel d’être visible au bon endroit, au bon moment auprès de la bonne cible.</p>
        </div>

      <div className="flex flex-col  gap-20">
        <div className="flex flex-col items-start gap-4 md:flex-row xs:items-center xs:gap-9">
          <div className="w-20 h-20 relative bg-blue-400  flex justify-center items-center rounded-xl">
            <Image src={visibility} alt='visibility' height={40} width={40} />
          </div>
          <div className="w-auto max-w-[500px] text-justify font-poppins text-white">
            <span className="text-4xl font-bold leading-10">Anti-spam.<br /></span>
            <span className="text-opacity-80 text-lg font-medium leading-relaxed">Soyez visible lorsque vous êtes en recherche et protégé des sollicitations intempestives le reste du temps.</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 md:flex-row xs:items-center xs:gap-9">
          <div className="w-20 h-20 relative bg-blue-400 rounded-xl flex justify-center items-center">
          <Image src={coding} alt='coding' height={40} width={45} />
          </div>
          <div className="w-auto max-w-[500px]  text-justify font-poppins text-white">
            <span className="text-3xl font-bold leading-10">Dédié à l'univers C++.<br /></span>
            <span className="text-opacity-80 text-lg font-medium leading-relaxed">Fondé par des experts C++, notre mission est de connecter les acteurs de l'écosystème.</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 md:flex-row xs:items-center xs:gap-9">
          <div className="w-20 h-20 relative bg-blue-400 rounded-xl flex justify-center items-center">
          <Image src={search} alt='search' height={40} width={45} />
          </div>
          <div className="w-auto max-w-[500px] text-justify font-poppins text-white">
            <span className="text-3xl font-bold leading-10">Tous status.<br /></span>
            <span className="text-opacity-80 text-lg font-medium leading-relaxed">Que vous recherchiez une mission, un CDI ou un stage, vous trouverez votre bonheur sur Lambda Labs.</span>
          </div>
        </div>
      </div>
            <Link href={"/connexion"}>
              <Button type='button' title="Rejoindre la communauté" variant='btn_blue'/>
            </Link>
    </div>
  );
};

export default AdvantagesSection;
