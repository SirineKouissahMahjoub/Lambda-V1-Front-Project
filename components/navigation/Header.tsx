import React from 'react';
import logo from '@/public/Images/Logo-lambda.png'
import Image from 'next/image';
import ProfilDrepdown from '../CandidatPlatform/ProfilDropdown';

const Header = () => {
  return (
    <div className='z-20 bg-gray-100 h-16 max-w-screen-auto shadow-md'>
      <div>
      <Image src={logo} alt='logo' width={160} height={100} className='relative left-24 top-4'/>
        <div>
            {/* <ProfilDrepdown/> */}
        </div>
      </div>
    </div>
  )
}

export default Header
