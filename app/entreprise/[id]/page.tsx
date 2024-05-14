import Bande from "@/components/CompanyDetailsComponents/Bande";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import fakeCompanyData from "@/db/FakeCompanyData";
import Image from "next/image";
import React from 'react';
import Button from '@/components/buttons/Button';
import Stickers from "@/components/JobDetailsComponent/stickers";
import DataCard from "@/components/CompanyDetailsComponents/DataCard";
import GoogleMapsEmbed from "@/components/CompanyDetailsComponents/GoogleMapsEmbed";

const Entreprise = async ({ params } : { params : { id:string } }) => {
  const SingleCompany = fakeCompanyData.find((CompanyData) => CompanyData.id.toString()==params.id);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824483394!2d2.264634092871859!3d48.85893843515108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2stn!4v1714508163071!5m2!1sfr!2stn";


  return (
<>
<Navbar/>
<Bande/>
<div className="mx-20 mb-20">

  <div className="border-2 border-gray-200 h-auto px-4 py-4 rounded-lg">
      <div className="border-1 px-4 py-4 mb-6 flex items-center justify-between border-gray-200 h-auto w-auto rounded-lg">
        <div className="flex items-center">
          <Image src={SingleCompany?.logoSrc} alt='logo' width={120} height={100} className='border-2 border-gray-100 rounded-md'/>
          <div className='mx-4'>
            <h1 className='bold-20 text-gray-800'>{SingleCompany?.companyName}</h1>
          </div>
        </div>
        <div className="mx-4">
          <Button type='button' title="Suivre" variant='btn_dark_blue_outline'/>
        </div>
      </div>


      <div className="flex gap-5">   
        <div className="border-2 px-4 py-4 border-gray-200 h-auto w-1/2 rounded-lg">
          <p className="medium-16 text-gray-800 font-poppins">A propos</p>
          <div className="flex gap-2 my-4">
          <Stickers title={SingleCompany?.location}/>
          <Stickers title={SingleCompany?.industry}/>
          </div>
          <p className="regular-16 text-gray-700">
          {SingleCompany?.description}
          </p>
        </div>

        <div className="border-1 border-gray-200 h-auto w-1/2 rounded-lg gap-2 ">
          <div className="flexCenter gap-2">
            <div className="w-1/2">
          <DataCard
          title="Siége social"
          subtitle={SingleCompany?.location}
          color="blue"/></div>
          <div className="w-1/2">
          <DataCard
          title="Nombre d'employées"
          subtitle={SingleCompany?.numberOfEmployees}
          color="green"/></div>
          </div>
          <div className="flexCenter gap-2 my-2">

          <div className="w-1/2">
          <DataCard
          title="Création"
          subtitle={SingleCompany?.creationYear}
          color="orange"/></div>
          <div className="w-1/2">
          <DataCard
          title="Chiffres d'affaires"
          subtitle={SingleCompany?.chiffreAffaire}
          color="purple"/>
          </div>
          </div>
        </div>
      </div> 
      

      <div className="border-2 px-4 py-4 my-6 flex items-center justify-between border-gray-200 h-auto w-auto rounded-lg">
        <div className="flex items-center">
          <Image src={SingleCompany?.photoRecruteur} alt='recruteur' width={100} height={100} className='border-2 border-gray-100 rounded-md'/>
          <div className='mx-4'>
            <p className="regular-14 text-gray-400 mb-4">Recruteur</p>
            <h1 className='bold-20 text-gray-800 mb-2'>{SingleCompany?.nomRecruteur}</h1>
            <p className="regular-14 text-gray-500 mb-1">Repond généralement en 3 jours</p>

          </div>
        </div>
        <div className="mx-4">
          <Button type='button' title="Envoyer une candidature spontannée" variant='btn_blue'/>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen rounded-lg">
      <GoogleMapsEmbed src={mapUrl} width="500" height="350"/>
    </div>
</div>

</div>
<Footer/>
</>
  )
};
export default Entreprise;
