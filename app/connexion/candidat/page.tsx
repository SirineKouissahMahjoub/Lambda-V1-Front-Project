"use client";
import Image from 'next/image';
import { useState } from 'react';
import illustration from '@/public/Images/illustration-7.png';
import logo from "@/public/Images/Logo-lambda.png";
import Button from '@/components/buttons/Button';
import Link from 'next/link';
import logo2 from "@/public/Images/logo.svg";


function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Effectue la validation du formulaire ici
    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Envoyer les données de connexion au backend
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Rediriger l'utilisateur vers la page du tableau de bord
        window.location.href = '/dashboard';
      } else {
        // Afficher une erreur si l'authentification a échoué
        setError('Identifiants incorrects. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
    }
  };

  return (
    <div className="max-w-screen-auto mx-auto flex h-screen">
      <div className="w-1/2 bg-blue-900 flex justify-center items-center">
            <Link href={"/"}>
                <Image src={logo2} alt='logo' width={130} height={100} className='absolute left-6 top-4'/>
            </Link>
        {/* <h1 className="text-white text-3xl">Bienvenue !</h1> */}
        <div className='rounded-full bg-blue-800 w-[500px] h-[500px] items-center flex justify-center'>
            <Image src={illustration} alt='illustration' width={600} height={600}/>
        </div>
      </div>
      <div className="w-1/2 p-10 flexCenter bg-white">
        <div className='w-96 flex flex-col justify-center'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='flexCenter'>
                    <Image src={logo} alt='logo' width={160} height={100} className='mb-20'/>
                </div>
            <h2 className="mb-8 text-center bold-20 text-gray-600">Connectez-vous !</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Nom d'utilisateur :</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-1">
                <label htmlFor="password" className="block text-gray-700">Mot de passe :</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <Link href={"/resetpassword"}><p className='text-gray-400 regular-14 mb-4 right-0 '>Mot de passe oublié ?</p></Link>
            <div className='w-96 items-center'>
                <Link href={"/platform/candidat"}>
                    <Button type='button' title='Se connecter' variant='btn_blue' />
                </Link>
                <Link href={"/inscription/candidat"}>
                  <p className='text-gray-400 regular-14 mb-4 right-0 mt-1 underline'>Je n'ai pas un compte. s'inscrire</p>
                </Link>

            </div>
            </form>
        </div>
      </div>
    </div>
  );
  
};

export default Connexion;


