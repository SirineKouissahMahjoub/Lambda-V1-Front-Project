import Image from 'next/image';
import React from 'react';
import avatar1 from '@/public/Images/avatars/avatar-1.svg';
import avatar2 from '@/public/Images/avatars/avatar-23.svg';
import avatar3 from '@/public/Images/avatars/avatar-3.svg';
import avatar4 from '@/public/Images/avatars/avatar-45.svg';

interface DeveloperProps {
    developerCount: number;
}

const Infocard: React.FC<DeveloperProps> = ({ developerCount }) => {
    return (
        <div className="relative w-full h-full bg-white shadow-md flex justify-center items-center content-center rounded-lg">
            <div className="absolute center text-center flex-col flex items-center">
                <div className="flex h-12 w-12 -space-x-4 justify-center items-center">
                    <Image
                        className="rounded-full border-white border-0.5"
                        src={avatar1}
                        alt="Developer 1"
                        width={46}
                        height={46}
                    />
                    <Image
                        className="rounded-full border-white border-0.5"
                        src={avatar2}
                        alt="Developer 2"
                        width={46}
                        height={46}
                    />
                    <Image
                        className="rounded-full border-white border-0.5"
                        src={avatar3}
                        alt="Developer 3"
                        width={46}
                        height={46}
                    />
                    <Image
                        className="rounded-full border-white border-0.5"
                        src={avatar4}
                        alt="Developer 4"
                        width={46}
                        height={46}
                    />
                </div>
                <div className="flex flex-col items-center text-center text-gray-600 regular-16 mt-2 ">
                    +{developerCount}<br/> développeurs
                </div>
            </div>
        </div>
    );
};

export default Infocard;
