"use client";
import React, { useState } from 'react';
import Button from "@/components/buttons/Button";
import { localisationOptions, ExperienceOptions } from "@/db/FilterOptions";

const CDI = () => {
  const [seniorite, setSeniorite] = useState('');
  const [domaine, setDomaine] = useState('');
  const [salaireBrut, setSalaireBrut] = useState('');
  const [departement, setDepartement] = useState('');

  const domainOptions = [
    { label: 'Dévéloppement software' },
    { label: 'Systèmes embarqués et robotique' },
    { label: 'Calculs scientifiques et recherches' },
    { label: 'Haute performance et finance' },
    { label: 'Data science et IA' },
    { label: 'Video game' },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      seniorite,
      domaine,
      salaireBrut,
      departement
    });
  };

  return (
    <div className="max-w-auto my-20 mx-auto">
      <h2 className="text-2xl bold-20 font-poppins text-gray-800 text-center mb-4 ">Baromètre CDI (Salarié)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flexCenter gap-4'>
          <div>
            <label htmlFor="seniorite" className="block font-semibold mb-1">Séniorité :</label>
            <select
              id="domaine"
              value={domaine}
              onChange={(e) => setDomaine(e.target.value)}
              className="w-full border border-gray-300 text-gray-800 regular-16 font-poppins bg-gray-100 rounded-md px-4 py-2"
            >
              {ExperienceOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="domaine" className="block font-semibold mb-1">Domaine d'application du C++ :</label>
            <select
              id="domaine"
              value={domaine}
              onChange={(e) => setDomaine(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            >
              {domainOptions.map(option => (
                <option>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="salaireBrut" className="block font-semibold mb-1">Dernier Salaire Brut en K€ :</label>
            <input
              type="number"
              id="salaireBrut"
              value={salaireBrut}
              onChange={(e) => setSalaireBrut(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="departement" className="block font-semibold mb-1">Département de votre employeur :</label>
            <select
              id="departement"
              value={departement}
              onChange={(e) => setDepartement(e.target.value)}
              className="w-full border border-gray-300  text-gray-800 regular-16 font-poppins bg-gray-100  rounded-md px-4 py-2"
            >
              {localisationOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className=' items-center flex justify-center'>
          <Button type="submit" title="Voir le resultat" variant="btn_blue" />
        </div>
      </form>
    </div>
  );
};

export default CDI;

