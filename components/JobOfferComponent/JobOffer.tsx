import Image from 'next/image';
import React from 'react';
import salaire from '@/public/Icons/money.svg';
import localisation from '@/public/Icons/location_on.svg';
import remote from '@/public/Icons/remote.svg';
import views from '@/public/Icons/views.svg';
import fakeJobData from '@/db/FakeJobData';
import Link from 'next/link';

interface JobCardProps {
    id: number;
    logoSrc: string;
    title: string;
    companyName: string;
    contractType: string;
    location: string;
    remoteDays: string;
    salary: string;
    experience: string;
    publishedDate: string;
    viewCount: number;
}

const JobCard: React.FC<JobCardProps> = ({
    id,
    logoSrc,
    title,
    companyName,
    contractType,
    location,
    remoteDays,
    salary,
    publishedDate,
    viewCount
}) => {
    let sidebarColorClass = '';
    switch (contractType) {
        case 'CDI':
            sidebarColorClass = 'bg-green-200';
            break;
        case 'Freelance':
            sidebarColorClass = 'bg-orange-200';
            break;
        case 'Stage':
        case 'Alternance':
            sidebarColorClass = 'bg-yellow-200';
            break;
        case 'Consultant':
            sidebarColorClass = 'bg-purple-200';
            break;
        default:
            sidebarColorClass = 'bg-blue-200';
            break;
    }

    return (
        <Link href={`/jobdetails/${id}`} key={id}>
            <div className="flex items-center mx-2 my-4 w-auto">
                <div className="bg-white w-[430px] h-[200px] border-[1px] overflow-hidden border-gray-200 hover:shadow-sm rounded-lg relative">
                    <div className={`absolute w-3 h-full rounded-tl-lg rounded-bl-lg ${sidebarColorClass} left-0 top-0`} />
                                    
                        <div className='relative grid grid-rows-3 grid-flow-col px-4 gap-0'>
                        <div className="grid grid-cols-3 gap-6 left-0 my-4 justify-start">
                                <div className="col-span-1 flex items-center justify-end pr-2">
                                    <Image src={logoSrc} alt="Company Logo" width={60} height={60} className="rounded-md" />
                                </div>
                                <div className="col-span-2 justify-end">
                                
                                    <h2 className="text-md font-semibold">{title}</h2>
                                    <p className="text-sm">{companyName}</p>
                                    <span className={`text-xs ${sidebarColorClass} bg-opacity-40 px-2 py-1 rounded-lg`}>{contractType}</span>
                                </div>
                        </div>

                        <div className="px-4">
                            <div className="flex center justify-between row-span-3 mb-4 text-gray-600 gap-8">
                                <p className="regular-14 flex flex-nowrap items-center gap-1 w-28">
                                    <Image src={localisation} alt='localisation' className='h-6 w-6'/>
                                    {location}
                                </p>
                                <p className="regular-14 flex flex-nowrap items-center gap-1">
                                    <Image src={salaire} alt='salaire' className='h-6 w-6'/>
                                    {salary}
                                </p>
                                <p className="regular-14 flex flex-nowrap items-center gap-1">
                                    <Image src={remote} alt='remote' className='h-6 w-6'/>
                                    {remoteDays}
                                </p>
                            </div>
                            
                            <div className="absolute gap-x-40 px-4 flex justify-between text-gray-500 regular-14 mb-2 fix-bottom">
                                <p>{publishedDate}</p>
                                <p className="flex items-center gap-1">{viewCount}<Image src={views} alt='views'/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
