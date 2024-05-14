import React from 'react';

interface AppsStatusCardProps {
    status: string; 
    color: string;
    number: number; 
}

  const AppsStatusCard: React.FC<AppsStatusCardProps> = ({status, color, number})=>{
  return (
    
      <div className={`w-auto h-20 px-4 mx-1 my-1 py-1 items-center flexCenter rounded-md ${color} `}>
        <div className=" content-center flex flex-col justify-center items-center">
          <span className={`text-gray-600 medium-16`}>{number}</span>
          <h1 className={` text-gray-500 regular-16`}>{status}</h1>
        </div>
      </div>
    
  );
};

export default AppsStatusCard;