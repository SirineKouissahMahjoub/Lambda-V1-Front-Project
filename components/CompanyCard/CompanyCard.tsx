import React from 'react';
import Image from 'next/image';
import employeeIcon from '@/public/Icons/employees.svg';
import locationIcon from '@/public/Icons/Company_location.svg';
import offersIcon from '@/public/Icons/jobs.svg';
import industryIcon from '@/public/Icons/setting.svg';
import { CompanyData } from '@/db/FakeCompanyData';
import Link from 'next/link';

interface CompanyCardProps {
    companyData: CompanyData; 
}

const CompanyCard: React.FC<CompanyCardProps> = ({ companyData }) => {
    const { id, logoSrc, companyName, industry, location, numberOfEmployees, numberOfOffers } = companyData;

    return (
        <Link href={`entreprise/${id}`}>
        <div className="flex items-center mx-2 my-4">
            <div className="bg-white w-[300px] h-[280px] border-[1px] overflow-hidden border-gray-200 hover:shadow-sm rounded-lg relative">
                <div className="absolute w-3 h-full bg-blue-200 left-0 top-0 rounded-tl-lg rounded-bl-lg" />
                <div className="px-4 py-4 flex items-center justify-center">
                    <div className="flex items-center justify-center pr-2">
                        <Image src={logoSrc} alt="Company Logo" width={60} height={60} className="rounded-md" />
                    </div>
                    <div className="pl-2">
                        <h2 className="text-lg text-gray-700 font-semibold font-poppins">{companyName}</h2>
                        
                    </div>
                </div>
                <div className="px-4">
                <div className="flex items-start content-center flex-col justify-between gap-3 text-gray-600 my-4 mx-8">
    <div className="regular-16 flex items-start gap-1">
        <Image src={industryIcon} alt="Secteur d'activité" className="h-6 w-6" />
        <p>{industry}</p>
    </div>
    <div className="regular-16 flex items-start gap-1">
        <Image src={locationIcon} alt="Location" className="h-6 w-6" />
        <p>{location}</p>
    </div>
    <div className="regular-16 flex items-start gap-1">
        <Image src={employeeIcon} alt="Number of Employees" className="h-6 w-6" />
        <p>{numberOfEmployees}</p>
    </div>
    <div className="regular-16 flex items-start gap-1">
        <Image src={offersIcon} alt="Number of Offers" className="h-6 w-6" />
        <p>{numberOfOffers} offres</p>
    </div>
</div>

                </div>
            </div>
        </div></Link>
    );
};

export default CompanyCard;
