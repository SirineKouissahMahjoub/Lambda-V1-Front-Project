"use client";
import { useState } from 'react';
import illustration from '@/public/Images/illustration-6.png';
import Image from 'next/image';
import logo from "@/public/Images/logo.svg";
import Link from 'next/link';
import Button from '@/components/buttons/Button';


function InscriptionCandidat() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMotDePasseChange = (e) => {
    setMotDePasse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoute ici la logique pour soumettre le formulaire
  };

  return (
    <div className="max-w-screen-auto mx-auto flex h-screen">

        <div className="w-1/2 bg-blue-900 flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl text-center bold-32 min-w-36 xl:w-[650px] my-8 font-poppins">Rejoignez la Communauté <span className='text-yellow-200'>C++</span> sur Lambda</h1>
            <Link href={"/"}>
            <Image src={logo} alt='logo' width={130} height={100} className='absolute left-6 top-4'/>
            </Link>
            <div className='rounded-full bg-blue-800 w-[500px] h-[500px] items-center flex justify-center'>
                <Image src={illustration} alt='illustration' width={500} height={500}/>
            </div>
        </div>

        <div className="w-1/2 p-10 flexCenter bg-white">
            <div className='w-96 flex flex-col justify-center'>
                <h1 className="text-2xl mb-8 font-poppins bold-20 text-gray-800 text-center">Inscription Candidat</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label htmlFor="nom" className="block text-gray-700">Nom :</label>
                    <input type="text" id="nom" value={nom} onChange={handleNomChange} placeholder="Nom" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="prenom" className="block text-gray-700">Prénom :</label>
                    <input type="text" id="prenom" value={prenom} onChange={handlePrenomChange} placeholder="Prénom" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Adresse e-mail :</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Adresse e-mail professionnelle" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="motDePasse" className="block text-gray-700">Mot de passe :</label>
                    <input type="password" id="motDePasse" value={motDePasse} onChange={handleMotDePasseChange} placeholder="Mot de passe" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className='w-96 items-center'>
                <Button type='button' title="s'inscrire" variant='btn_blue' />
                <Link href={"/connexion/candidat"}><p className='text-gray-400 regular-14 mb-4 mt-1 underline'>Vous avez déja un compte! se connecter</p></Link>
                    </div>

                </form>
            </div>
        </div>
    </div>
  );
}

export default InscriptionCandidat;

