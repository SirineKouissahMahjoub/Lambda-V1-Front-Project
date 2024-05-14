import React from 'react';
import CompanyCard from '@/components/CompanyCard/CompanyCard';
import Button from '../buttons/Button'; // Assurez-vous d'importer correctement votre composant de bouton
import Link from 'next/link';

interface CompanyData {
  id: number;
  logoSrc: string;
  companyName: string;
  industry: string;
  location: string;
  numberOfEmployees: string;
  description : string;
  numberOfOffers: number;
  creationYear :number;
  chiffreAffaire : string;
  nomRecruteur : string;
  photoRecruteur : string;
}

interface CompanySectionProps {
  companyDataArray: CompanyData[];
}

const CompanySection: React.FC<CompanySectionProps> = ({ companyDataArray }) => {
  // Limiter la taille de companyDataArray à 6
  const limitedCompanyDataArray = companyDataArray.slice(0, 6);

  return (
    <section className="container mx-auto py-20 px-4 md:px-4 lg:px-6 xl:px-8">
      <div className="flex flex-col mb-5 justify-center items-center">
        <h3 className="text-gray-700 text-3xl font-bold font-poppins text-center">Entreprises en vedette</h3>
        <p className="text-gray-700 text-opacity-80 text-center text-lg font-medium font-poppins">Découvrez ces entreprises qui font la une.</p>
      </div>
      {/* Map through company data array and render CompanyCard component */}
      <div className="company-cards items-center justify-center grid grid-flow-col gap-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 auto-rows-auto gap-1">
          {limitedCompanyDataArray.map((companyData, index) => (
            <CompanyCard
              key={index}
              companyData={companyData}
            />
          ))}
        </div>
      </div>
      <div className="flexCenter mt-6 mb-8">
        <Link href={"/entreprises"}>
        <Button type="button" title="Voir toutes les entreprises" variant="btn_blue" />
        </Link>
      </div>
    </section>
  );
};

export default CompanySection;
