interface Project {
  order: string;
  title: string;
  link: string;
}

export const dataProjects: Project[] = [
  {
    order: "01 ° 05",
    title: "title1",
    link: "https://github.com/WildCodeSchool/2023-03-wns-lamarr-groupe1",
  },
  {
    order: "02 ° 05",
    title: "title2",
    link: "https://github.com/RomainRG31/Voyage-en-Grece-antique-WCS",
  },
  {
    order: "03 ° 05",
    title: "title3",
    link: "https://github.com/RomainRG31/Kasa",
  },
  {
    order: "04 ° 05",
    title: "title4",
    link: "https://github.com/RomainRG31/e-commerce-kanap",
  },

  {
    order: "05 ° 05",
    title: "title5",
    link: "https://github.com/RomainRG31/api-piiquante",
  },
];

interface Translations {
  [key: string]: {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
  };
}

export const projectTranslations: Translations = {
  fr: {
    title1: "CreativeCode - Éditeur de code en ligne",
    title2: "Voyage en Grèce antique - WCS",
    title3: "Kasa - Site de location immobilière",
    title4: "Kanap - Ecommerce",
    title5: "Piiquante - Création d'une API REST",
  },
  en: {
    title1: "CreativeCode - Online code editor",
    title2: "Voyage to Ancient Greece - WCS",
    title3: "Kasa - Real Estate Rental Website",
    title4: "Kanap - Ecommerce",
    title5: "Piiquante - Creating a REST API",
  },
};
