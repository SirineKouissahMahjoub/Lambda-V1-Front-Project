// Bandecolore.tsx
import React from 'react';
import { JobData } from '@/db/FakeJobData';

interface BandecoloreProps {
  contractType: string;
}

const Bandecolore: React.FC<BandecoloreProps> = ({ contractType }) => {
  let bandeColorClass = '';

  switch (contractType) {
    case 'CDI':
      bandeColorClass = 'bg-green-200';
      break;
    case 'Freelance':
      bandeColorClass = 'bg-orange-200';
      break;
    case 'Stage':
    case 'Alternance':
      bandeColorClass = 'bg-yellow-200';
      break;
    case 'Consultant':
      bandeColorClass = 'bg-purple-200';
      break;
    default:
      bandeColorClass = 'bg-blue-200';
      break;
  }

  return (
    <div className={`mx-20 my-12 w-auto h-20 rounded-lg ${bandeColorClass}`}/>
  );
};

export default Bandecolore;
