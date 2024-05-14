import React from 'react';
import DataCard from './DataCard';
import group from '@/public/Icons/groups_2.svg';
import business from '@/public/Icons/business_center.svg';

interface TitleHeroSectionProps {
    title: string;
    description: string;
}

const TitleHeroSection: React.FC<TitleHeroSectionProps> = ({ title, description }) => {

    return (
        <section className='max-container bg-blue-900 padding-container xs:px-12 flex flex-col items-center justify-center gap-4 py-8 pb-12 lg:py-12'>

            {/* Section Title */}
            <h1 className="text-white bold-40 font-poppins text-center mx-48">
            {title}
            </h1>
            
            {/* Section Description */}
            <p className="text-lg font-poppins text-white text-center mx-20">{description}</p>

        </section>
    );
};

export default TitleHeroSection;
