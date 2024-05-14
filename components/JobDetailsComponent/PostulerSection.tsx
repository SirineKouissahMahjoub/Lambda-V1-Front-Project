"use client";
import React, { useRef, useState } from 'react';
import Button from '../buttons/Button';

const ApplicationForm = ({ userEmail }) => {
  const formRef = useRef(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setPopupVisible(true);
    // Cache le popup après 3 secondes
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div id="application-form" className="relative mx-20 my-8 p-8 bg-purple-100 shadow-lg rounded-lg">
        <h1 className='mx-2 mb-8 bold-20 text-gray-700 font-poppins'>Postuler à cette offre</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='flex justify-start gap-8'>
            <div className='flex flex-col w-1/2'>
            <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
                type="email"
                value={userEmail}
                readOnly
                className="mt-2 p-2 border bg-white border-gray-300 rounded w-full cursor-not-allowed"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700">Ajouter votre CV</label>
            <input
                type="file"
                className="mt-2 p-2 border border-gray-300 rounded w-full bg-white"
                required
            />
            </div>
            </div>
            <div className="mb-4 w-1/2">
            <label className="block text-gray-700">Message de motivation</label>
            <textarea
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                rows="4"
                required
            ></textarea>
            </div>
        </div>
        <div className='max-w-40 mt-2'>
            <Button 
            type='submit'
            title='postuler'
            variant='btn_blue'/>
        </div>
      </form>
      {isPopupVisible && (
        <div className="absolute top-0 left-0 right-0 bg-green-100 text-green-700 p-4 rounded shadow-md mt-2">
          Votre application a été envoyée avec succès!
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
