import Image from 'next/image';
import React from 'react';
import Button from "@/components/buttons/Button";

interface CvthequeLigneProps {
    id: number;
    name: string;
    image: string;
    experience: string;
    location: string;
    competences: string;
    sector: string;
    disponibilite: boolean;
}

const CvthequeLigne: React.FC<CvthequeLigneProps> = ({
    id,
    name,
    image,
    experience,
    location,
    competences,
    sector,
    disponibilite}) => {
  return (
    <div className='bg-white flexCenter gap-16 border-2 border-gray-100 w-auto px-2 h-auto py-2 justify-center content-center'>
      <div className="relative justify-start rounded-md">
        <Image src={image} alt='candidat' width={60} height={60}/>
        {disponibilite ? (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"/>
        ) : (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"/>
        )}
      </div>
      {/* <p>{name}</p> */}
      <p className='w-12'>{experience}</p>
      <p className='w-32'>{location}</p>
      <p>{competences}</p>
      <p>{sector}</p>
      <div className='justify-end'>
      <Button type='button' title='Contacter' variant='btn_blue'/>
      </div>
    </div>
  )
}

export default CvthequeLigne
