'use client';
import { ReadonlyURLSearchParams, useSearchParams, useRouter } from 'next/navigation';
import React, { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
// Importez les options de type et de contrat
import { TypeOptions, contractTypeOptions, ExperienceOptions, localisationOptions, SecteurOptions, CompetenceOptions } from '@/db/FilterOptions';

// Définissez l'interface pour les props du composant Filters
interface FiltersProps {
    onFilterChange: (filters: any) => void;
}

// Définissez le composant Filters
const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
    // State pour les filtres sélectionnés
    const [selectedFilters, setSelectedFilters] = useState<any>({
        contractType: [],
        location: [],
        experience: [],
        sector: [],
        competence: [],
        type: [], // Ajoutez cette ligne pour initialiser le filtre de type
        // Ajoutez d'autres filtres si nécessaire
    });

    // Fonction pour mettre à jour les filtres sélectionnés
    const handleFilterChange = (filterType: string, value: string) => {
        const updatedFilters = {
            ...selectedFilters,
            [filterType]: selectedFilters[filterType].includes(value)
                ? selectedFilters[filterType].filter((item: string) => item !== value)
                : [...selectedFilters[filterType], value],
        };
        setSelectedFilters(updatedFilters);
        // Émettre les filtres sélectionnés à la fonction de rappel
        onFilterChange(updatedFilters);
    };

    return (
        <div className='w-52 space-y-6'>
            <h2 className="text-lg font-semibold mb-2 text-gray-800 font-poppins">Filtres</h2>
            {/* Options pour le type de travail */}
            <div>
                <h3 className="font-medium mb-1">Mode de travail</h3>
                {TypeOptions.map((option) => (
                    <label key={option} className="flex items-center">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleFilterChange('type', option)}
                            checked={selectedFilters.type.includes(option)}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>

            {/* Options pour le type de contrat */}
            <div>
                <h3 className="font-medium mb-1">Type de contrat</h3>
                {contractTypeOptions.map((option) => (
                    <label key={option} className="flex items-center">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleFilterChange('contractType', option)}
                            checked={selectedFilters.contractType.includes(option)}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>

            {/* Options pour la localisation */}
            <div className='max-h-[400px] overflow-y-auto'>
                <h3 className="font-medium mb-1">Localisation</h3>
                {localisationOptions.map((option) => (
                    <label key={option} className="flex items-center ">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleFilterChange('location', option)}
                            checked={selectedFilters.location.includes(option)}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>

            <div className='max-h-[400px] overflow-y-auto'>
                <h3 className="font-medium mb-1">Experience(s)</h3>
                {ExperienceOptions.map((option) => (
                    <label key={option} className="flex items-center ">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleFilterChange('experience', option)}
                            checked={selectedFilters.experience.includes(option)}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>

            <div className='max-h-[400px] overflow-y-auto'>
                <h3 className="font-medium mb-1">Secteur</h3>
                {SecteurOptions.map((option) => (
                    <label key={option} className="flex items-center ">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleFilterChange('sector', option)}
                            checked={selectedFilters.sector.includes(option)}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>

            <div className='max-h-[400px] overflow-y-auto'>
                <h3 className="font-medium mb-1">Secteur</h3>
                {CompetenceOptions.map((option) => (
                    <label key={option} className="flex items-center ">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleFilterChange('competence', option)}
                            checked={selectedFilters.competence.includes(option)}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>

        </div>
    );
};

export default Filters;
