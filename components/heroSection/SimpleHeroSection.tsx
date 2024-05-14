import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import group from '@/public/Icons/groups_2.svg';
import business from '@/public/Icons/business_center.svg';

interface HeroSectionProps {
    description: string;
}

const SimpleHeroSection: React.FC<HeroSectionProps> = ({ description }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [words, setWords] = useState<string[]>(['CDI', 'Stage ou Alternance', 'mission']);
    const [coloredWord, setColoredWord] = useState<string>(words[currentWordIndex]);

    const colors = ["#7ED7C1", "#FFF3A3", "#FFBE72"];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentWordIndex]);

    useEffect(() => {
        setColoredWord(words[currentWordIndex]);
    }, [currentWordIndex, words]);

    return (
        <section className='max-container bg-blue-900 padding-container xs:px-12 flex flex-col items-center justify-center gap-4 py-8 pb-12 lg:py-12'>

            {/* Section Title */}
            <h1 className="text-white bold-40 font-poppins text-center">
                Trouvez votre <span style={{ color: colors[currentWordIndex] }}>{coloredWord}</span>
            </h1>
            
            {/* Section Description */}
            <p className="text-lg font-poppins text-white text-center">{description}</p>

            {/* Data Cards */}
            <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-5'>
            <DataCard
            bgColor=" bg-[#7ED7C1]"
            iconSrc={business}
            number={20}
            text={`Offres en CDI`}
        />
            <DataCard
                bgColor=" bg-[#FFF3A3]"
                iconSrc={business}
                number={2}
                text={`Stages et alternances`}
            />
            <DataCard
                bgColor=" bg-[#FFBE72]"
                iconSrc={business}
                number={10}
                text={`Missions ouvertes`}
            />
            </div>

        </section>
    );
};

export default SimpleHeroSection;
