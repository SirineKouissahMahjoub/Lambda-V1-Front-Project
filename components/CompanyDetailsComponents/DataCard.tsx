import React from 'react';

interface DataCardProps {
    title: string;  
    color: string;
    subtitle : string;
}

  const DataCard: React.FC<DataCardProps> = ({ color, title, subtitle})=>{
  return (
    <div className={`border-1 w-auto h-28 px-4 py-2 flex flex-col content-center items-center justify-center bg-${color}-200 border-${color}-600 rounded-lg`}>
      <h2 className={`text-gray-700 bold-20 font-poppins`}>{title}</h2>
      <p className={`text-gray-500 text-md`}>{subtitle}</p>
    </div>
  );
};

export default DataCard;
