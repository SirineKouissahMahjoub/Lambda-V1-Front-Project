import React from 'react';
import Image from 'next/image';
import Logo from '@/public/Images/logo.svg';
import eclipse from '@/public/Images/Ellipse.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { id: 1, title: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com' },
  { id: 2, title: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
  { id: 3, title: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com' }
];

const usefulLinks = [
  {
      title: 'Liens utiles 1',
      links: [
          { id: 1, name: 'Accueil', url: '/' },
          { id: 2, name: 'À propos', url: '#' },
          { id: 3, name: 'Services', url: '#' },
          { id: 4, name: 'Contact', url: '#' }
      ]
  },
  {
    title: 'Liens utiles 2',
    links: [
        { id: 1, name: 'Accueil', url: '#' },
        { id: 2, name: 'À propos', url: '#' },
        { id: 3, name: 'Services', url: '#' },
        { id: 4, name: 'Contact', url: '#' }
    ]
},
{
  title: 'Liens utiles 3',
  links: [
      { id: 1, name: 'Accueil', url: '#' },
      { id: 2, name: 'À propos', url: '#' },
      { id: 3, name: 'Services', url: '#' },
      { id: 4, name: 'Contact', url: '#' }
  ]
},
{
  title: 'Liens utiles 4',
  links: [
      { id: 1, name: 'Accueil', url: '#' },
      { id: 2, name: 'À propos', url: '#' },
      { id: 3, name: 'Services', url: '#' },
      { id: 4, name: 'Contact', url: '#' }
  ]
},
{
  title: 'Liens utiles 5',
  links: [
      { id: 1, name: 'Accueil', url: '#' },
      { id: 2, name: 'À propos', url: '#' },
      { id: 3, name: 'Services', url: '#' },
      { id: 4, name: 'Contact', url: '#' }
  ]
},
{
  title: 'Liens utiles 6',
  links: [
      { id: 1, name: 'Accueil', url: '#' },
      { id: 2, name: 'À propos', url: '#' },
      { id: 3, name: 'Services', url: '#' },
      { id: 4, name: 'Contact', url: '#' }
  ]
},
];

const Footer = () => {
  return (
      <footer className="bg-[#051D3D] text-white">
        <div className=' py-8 px-16 top-0'>
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between top-0">
              {/* Colonne gauche */}
              <div className="md:w-1/3 flex flex-col items-center lg:items-start top-0">
                  <div className="mb-4">
                      <Image src={Logo} alt="Logo" width={100} height={100} />
                  </div>
                  <p className="text-center w-56 mb-2 lg:text-left">Média & Solutions pour le recrutement de développeurs C/C++.</p>
                  <p className="text-center lg:text-left">contact@lambda.fr</p>
                  <div className="flex gap-4 mt-4">
                      {socialLinks.map(link => (
                          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                              {link.icon}
                          </a>
                      ))}
                  </div>
              </div>
              {/* Colonne droite */}
              <div className="lg:w-2/3 lg:pr-8 my-8 lg:mb-0">
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {usefulLinks.map(section => (
                          <div key={section.title}>
                              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                              <ul className="text-gray-400">
                                  {section.links.map(link => (
                                      <li key={link.id}><a href={link.url}>{link.name}</a></li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
            
          </div>  

            <div className=" text-center lg:text-sm xs:text-xs pb-2 pt-8 relative">
                
              <Image src={eclipse} alt="Eclipse" width={250} height={250} className="bottom-0 left-0 absolute before:w-2 before:h-full before:left-0"/>
              <p>© 2023 Lambda - Tous droits réservés || Fait avec ❤️ par l'équipe Lambda.</p>

            </div>
            
            
            
      </footer>
  );
};

export default Footer;
