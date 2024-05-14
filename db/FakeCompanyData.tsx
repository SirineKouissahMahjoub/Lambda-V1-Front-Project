export interface CompanyData {
    id: number;
    logoSrc: string;
    companyName: string;
    industry: string;
    location: string;
    numberOfEmployees: string;
    description : string;
    numberOfOffers: number;
    creationYear :number;
    chiffreAffaire : string;
    nomRecruteur : string;
    photoRecruteur : string;
}

const fakeCompanyData: CompanyData[] = [
    {
        id: 1,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Réseaux sociaux',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 123,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-5.svg'
    },
    {
        id: 2,
        logoSrc: '/Images/logos/logo_google.jpg',
        companyName: 'Google',
        industry: 'Technologie, Internet',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 98,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-27.svg'
    },
    {
        id: 3,
        logoSrc: '/Images/logos/adobe_logo.jpg',
        companyName: 'Adobe',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 120,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-12.svg'
    },
    {
        id: 4,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 10,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-42.svg'
    },
    {
        id: 5,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Réseaux sociaux',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 123,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-22.svg'
    },
    {
        id: 6,
        logoSrc: '/Images/logos/logo_google.jpg',
        companyName: 'Google',
        industry: 'Technologie, Internet',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 98,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-23.svg'
    },
    {
        id: 7,
        logoSrc: '/Images/logos/adobe_logo.jpg',
        companyName: 'Adobe',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 120,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-2.svg'
    },
    {
        id: 8,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 10,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-14.svg'
    },

    {
        id: 9,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Réseaux sociaux',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 123,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-9.svg'
    },
    {
        id: 10,
        logoSrc: '/Images/logos/logo_google.jpg',
        companyName: 'Google',
        industry: 'Technologie, Internet',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 98,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-7.svg'
    },
    {
        id: 11,
        logoSrc: '/Images/logos/adobe_logo.jpg',
        companyName: 'Adobe',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 120,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-5.svg'
    },
    {
        id: 12,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 10,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-18.svg'
    },
    {
        id: 13,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Réseaux sociaux',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 123,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-30.svg'
    },
    {
        id: 14,
        logoSrc: '/Images/logos/logo_google.jpg',
        companyName: 'Google',
        industry: 'Technologie, Internet',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 98,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-26.svg'
    },
    {
        id: 15,
        logoSrc: '/Images/logos/adobe_logo.jpg',
        companyName: 'Adobe',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 120,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-15.svg'
    },
    {
        id: 16,
        logoSrc: '/Images/logos/Facebook_logo.png',
        companyName: 'Facebook',
        industry: 'Logiciels',
        location: 'États-Unis',
        numberOfEmployees: "Entre 50 et 99 salariés",
        description : "Google est une entreprise américaine de services technologiques fondée en 1998 dans la Silicon Valley, en Californie, par Larry Page et Sergey Brin, créateurs du moteur de recherche Google. C'est une filiale de la société Alphabet depuis août 2015.",
        numberOfOffers: 10,
        creationYear :1940,
        chiffreAffaire : "200 MD",
        nomRecruteur : "Nathan K.",
        photoRecruteur : '/Images/avatars/avatar-40.svg'
    },
];

export default fakeCompanyData;
