import Button from '@/components/buttons/Button';
import Image from 'next/image';
import React from 'react';
import illustration from '@/public/Images/illustration-4.png';
import logo from "@/public/Images/logo.svg";
import Link from 'next/link';


const ChoixInscription = () => {
    return (
        <div className="max-w-screen-auto mx-auto flex h-screen">
            
            <div className="w-1/2 bg-blue-900 p-10 flex flex-col items-center justify-center h-screen">
                <Link href={"/"}>
                    <Image src={logo} alt='logo' width={130} height={100} className='absolute left-6 top-4'/>
                </Link>
                <div className='w-96'>
                    <h1 className="text-white text-2xl text-center bold-40 font-poppins mb-8">Je suis recruteur!</h1>
                    <Link href={"/inscription/recruteur"}>
                    <Button type='button' title="Créer mon compte recruteur" variant='btn_blue'/>
                    </Link>
                </div>
                <Link href={"/connexion"}><p className='text-gray-400 regular-14 mb-4 mt-10 underline'>Vous avez déja un compte! Connectez-vous.</p></Link>

            </div>


          <div className="w-1/2 p-10 bg-white items-center flex flex-col justify-center">
            <div className='w-96'>
                <h1 className="text-gray-800 text-2xl text-center mb-8 bold-40 font-poppins">Je suis un talent!</h1>
                <Link href={"/inscription/candidat"}>
                    <Button type='button' title="Créer mon compte candidat" variant='btn_blue'/>
                </Link>
            </div>
          
          {/* <div className='absolute items-center content-center '>
          <Image src={illustration} alt='illustration' width={600} height={600}/>
          </div> */}
        <Link href={"/connexion"}><p className='text-gray-400 regular-14 mb-4 mt-10 underline'>Vous avez déja un compte! Connectez-vous.</p></Link>
        </div>
        </div>
      );
}

export default ChoixInscription
