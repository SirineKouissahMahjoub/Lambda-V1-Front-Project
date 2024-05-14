"use client";
import Link from 'next/link';
import Logo from '@/public/Images/logo.svg';
import Image from 'next/image';
import Button from '../buttons/Button';
import NavLinks from './NavLinks';
import { useState } from 'react';
import close from '@/public/Icons/close.svg';
import menu from '@/public/Icons/menu.svg';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className='flex justify-between max-container items-center relative z-30 py-2 px-5 bg-blue-900'>
      <Link href='/'>
        
          <Image alt='Logo' className='z-50 p-5 md:w-auto w-full' src={Logo} width={10} height={25} />
        
      </Link>

      {/* Desktop navigation */}
      <ul className='hidden justify-around gap-14 md:bg-blue-900 md:flex items-center font-["Poppins]'>
        <NavLinks />
      </ul>

      {/* Buttons */}
      <div className='lg:flex lg:justify-center md:block hidden'>
        <Link href={"/inscription"}>
        <Button type='button' title="S'inscrire" variant='btn_white' />
        </Link>
        <Link href={"/connexion"}>
        <Button type='button' title='Se connecter' variant='btn_blue' />
        </Link>
      </div>

      {/* Mobile navigation menu */}
      <div className='md:hidden'>
        {/* Menu button */}
        <button
          className='text-3xl text-gray-50 focus:outline-none'
          onClick={toggleMenu}
        >
          {open ? (
            // Close menu icon
            <Image alt='close' src={close}/>
          ) : (
            // Menu icon
            <Image alt='menu' src={menu}/>
          )}
        </button>

       {/* Menu items */}
{open && (
  <ul className='bg-blue-900 md:hidden items-center justify-center fixed py-24 px-4 left-0 right-0 bottom-0 top-16'>
    <li className='flex flex-col items-center justify-center'>
      <Link href='/'>
       
          {/*<Image alt='Logo' src={Logo} width={140} height={20} />*/}
      </Link> 
      <div className='items-center flex-col text-center justify-center '>
      <NavLinks /> 
      </div> 
      <div className='gap-4 flex flex-col items-center justify-center mt-4'>
        <Link href={"/inscription"}>
          <Button type='button' title="S'inscrire" variant='btn_white' />
        </Link>
        <Link href={"/connexion"}>
          <Button type='button' title='Se connecter' variant='btn_blue' />
        </Link>
      </div>
    </li>
  </ul>
)}
      </div>
    </nav>
  );
};

export default Navbar;

