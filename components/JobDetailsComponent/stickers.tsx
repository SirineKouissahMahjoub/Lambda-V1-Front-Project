import React from 'react';

interface StickersProps {
    title: string;  
}

  const Stickers: React.FC<StickersProps> = ({title})=>{
  return (
    
      <div className="w-auto px-4 py-1 h-auto items-center flexCenter rounded-md bg-blue-200">
        <div className="text-gray-600 text-md font-medium">
          {title}
        </div>
      </div>
    
  );
};

export default Stickers;