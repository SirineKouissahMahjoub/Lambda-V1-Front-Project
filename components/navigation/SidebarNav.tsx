import Link from 'next/link';
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaFileContractSolid } from "react-icons/lia";
import { BsBuildings } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { TbZoomMoney } from "react-icons/tb";
import { HiOutlineNewspaper } from "react-icons/hi2";

const SidebarNav = ({ children }) => {
  return (
    <div className='absolute z-30 top-0'>
        <div className='fixed bg-blue-900 w-20 h-screen border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center mt-16'>
                <Link href={'/platform/candidat'}>
                    <div className=' cursor-pointer text-white p-3 my-2 rounded-md flex flex-col items-center content-center'>
                    <RxDashboard size={32} color='white'/>
                    <p className='text-xs text-white text-center font-medium hover:font-bold'>Accueil</p>
                    </div>
                </Link>
                <span className='border-b-[0.1px] border-blue-950 w-16'></span>
                <Link href={'/platform/candidat/offres'}>
                    <div className='cursor-pointer text-white p-3 my-2 rounded-md flex flex-col items-center content-center'>
                    <MdOutlineWorkOutline size={32} color='white'/>
                    <p className='text-xs text-white text-center font-medium hover:font-bold'>Offres</p>
                    </div>
                </Link>
                <span className='border-b-[0.1px] border-blue-950 w-16'></span>
                <Link href={'/platform/candidat/candidatures'}>
                    <div className='cursor-pointer text-white py-3 my-2 rounded-md flex flex-col items-center content-center'>
                    <LiaFileContractSolid size={32} color='white'/>
                    <p className='text-xs text-white text-center font-medium hover:font-bold'>Candidatures</p>
                    </div>
                </Link>
                <span className='border-b-[0.1px] border-blue-950 w-16'></span>
                <Link href={'/platform/candidat/entreprises'}>
                    <div className='cursor-pointer text-white py-3 my-2 rounded-md flex flex-col items-center content-center'>
                    <BsBuildings size={32} color='white'/>
                    <p className='text-xs text-white text-center font-medium hover:font-bold'>Entreprises</p>
                    </div>
                </Link>
                <span className='border-b-[0.1px] border-blue-950 w-16'></span>
                <Link href={'/platform/candidat/barometre'}>
                    <div className='cursor-pointer text-white py-3 my-2 rounded-md flex flex-col items-center content-center'>
                    <TbZoomMoney size={32} color='white'/>
                    <p className='text-xs text-white text-center font-medium hover:font-bold'>Barometre</p>
                    </div>
                </Link>
                <span className='border-b-[0.1px] border-blue-950 w-16'></span>
                <Link href={'/platform/candidat/ressources'}>
                    <div className='cursor-pointer text-white py-3 my-2 rounded-md flex flex-col items-center content-center'>
                    <HiOutlineNewspaper size={32} color='white'/>
                    <p className='text-xs text-white text-center font-medium hover:font-bold'>Ressources</p>
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default SidebarNav;
