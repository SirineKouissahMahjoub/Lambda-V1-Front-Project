import { useState } from 'react';

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Implement your logic when an option is clicked
    console.log(`Option "${option}" clicked`);
    // Close the dropdown after an option is clicked
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span>{title}</span>
        <svg className={`fill-current h-4 w-4 ml-2 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 13a1 1 0 0 1-.7-.3l-4-4a1 1 0 1 1 1.4-1.4L10 11.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-.7.3z"/></svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl">
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionClick(option)} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
