import React from 'react';
import Image from 'next/image'; 

interface CardProps {
    bgColor: string;
    iconSrc: string; 
    number: number;
    text: string;
}

const DynamicCard: React.FC<CardProps> = ({ bgColor, iconSrc, number, text }) => {
    return (
        <div className="relative w-[190px] h-[90px] rounded-lg bg-white shadow-md overflow-hidden rounded-10">
            {/* Partie gauche de la carte */}
            <div className={`w-[60px] h-[100px] absolute left-0 top-0 bg-${bgColor} flex items-center justify-center`}>
                <Image className="w-10 h-10 flex -mt-2 items-center justify-center" src={iconSrc} alt="Icon" width={40} height={40}/> 
            </div>
            {/* Partie droite de la carte */}
            <div className="w-[130px] h-[90px] px-2 absolute -right-2 top-0 flex flex-col justify-center">
                <span className="text-2xl text-gray-700 bold-20">+{number}</span>
                <span className="text-sm text-gray-600 regular-14">{text}</span>
            </div>
        </div>
    );
};

export default DynamicCard;
