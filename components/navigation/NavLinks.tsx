import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import expand from '@/public/Icons/expand_more.svg';

const NavLinks = () => {
    const [heading, setHeading] = useState("");

    const links = [
        { name: "Offres", href: "/offres" },
        { name: "Entreprises", href: "/entreprises" },
        {
            name: "Baromètre",
            submenu: true,
            sublinks: [
                { name: "Baromètre CDI", href: "/barometrecdi" },
                { name: "Baromètre Freelance", href: "/barometrefreelance" }
            ]
        },
        {
            name: "Solutions",
            submenu: true,
            sublinks: [
                { name: "Job board", href: "/jobboard" },
                { name: "Recrutement en CDI", href: "/recrutcpp" },
                { name: "Freelance & consultant", href: "/freelance" }
            ]
        },
    ];

    return (
        <>
            {links.map((link, index) => (
                <div key={index} className='px-3 text-left md:cursor-pointer group'>
                    {link.submenu ? (
                        <>
                            <h1
                                className='regular-16 py-4 text-gray-50 flex justify-between items-center md:pr-0 pr-5 cursor-pointer transition-all hover:font-bold'
                                onClick={() => heading !== link.name ? setHeading(link.name) : setHeading('')}
                            >
                                {link.name}
                                <span className="text-xl md:mt-1 md:ml-2 ">
                                    <Image src={expand} alt="expand more" />
                                </span>
                            </h1>
                            <div className={`absolute top-14 w-48 ${heading === link.name ? 'md:block' : 'hidden'} group-hover:md:block hover:md:block`}>
                                <div className='py-2'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-blue-800 rotate-45'></div>
                                </div>
                                <div className='bg-blue-800 p-3 rounded-md w-52'>
                                    {link.sublinks.map((sublink, subIndex) => (
                                        <div key={subIndex}>
                                            <li className='regular-16 justify-start my-2 text-gray-50 flex cursor-pointer transition-all hover:font-bold'>
                                                <Link href={sublink.href}>{sublink.name}</Link>
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <Link href={link.href}>
                            <p className='regular-16 py-4 text-gray-50 flex justify-between items-center md:pr-0 pr-5 cursor-pointer transition-all hover:font-bold'>{link.name}</p>
                        </Link>
                    )}
                </div>
            ))}
        </>
    );
}

export default NavLinks;
