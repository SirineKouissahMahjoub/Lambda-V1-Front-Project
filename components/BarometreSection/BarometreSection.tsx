import React from 'react';
import Image from 'next/image';
import illustration from '@/public/Images/Illustration2.svg';
import Button from '../buttons/Button';

const BarometreSection = () => {
    return (
        <section className="max-container bg-blue-900 padding-container ">
            <div className='flexCenter content-center px-20 xs:px-4 flex-col gap-16 py-8 md:gap-12 lg:py-16 lg:flex-row'>
                <div className="xs:w-10/12 xs:order-1 mb-8 xs:mb-2 justify-end ">
                    <Image src={illustration} alt="Illustration" width={500} height={400}/>
                </div>
                <div className="xs:w-3/4 xs:order-2 justify-start text-white text-center items-center xl:text-left sm:items-center">
                    <h2 className="text-xl lg:text-4xl font-poppins font-bold mb-8 items-center justify-center">L’information est clé. Si vous ne l’avez pas, alors vous êtes aveugle.</h2>
                    <p className="text-lg sm:text-md font-poppins mb-8 items-center justify-center">La communauté fournit des données précieuses pour renforcer votre connaissance sur l’écosystème. Découvrez des informations sur les salaires pratiqués en fonction de la situation géographique du donneur d'ordre, des secteurs d’activité et de l'expérience.</p>
                    <div className='flexCenter'><Button type="button" title="Découvrir les statistiques du marché" variant="btn_blue" /></div>
                </div>
            </div>
        </section>
    );
};

export default BarometreSection;
