"use client";
import { useState } from 'react';
import { FaDoorClosed } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";

const AvailabilityDrop = () => {
  const [status, setStatus] = useState('available');

  const handleToggle = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className=" items-center content-center flex space-x-2 justify-start border-2 border-gray-100 rounded-2xl h-auto w-80 gap-2 px-2 py-2">
      <button
        onClick={() => handleToggle('available')}
        className={`px-4 py-2 rounded-xl flex gap-2 justify-center items-center ${
          status === 'available' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        <FaDoorOpen/>
        Disponible
      </button>
      <button
        onClick={() => handleToggle('unavailable')}
        className={`px-4 py-2 rounded-xl flex gap-2 justify-center items-center ${
          status === 'unavailable' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        <FaDoorClosed/>
        Indisponible
      </button>
    </div>
  );
};

export default AvailabilityDrop;
