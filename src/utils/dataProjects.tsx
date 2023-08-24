interface Project {
  order: string;
  title: string;
  link: string;
}

export const dataProjects: Project[] = [
  {
    order: "01 ° 06",
    title: "title1",
    link: "https://github.com/WildCodeSchool/2023-03-wns-lamarr-groupe1",
  },
  {
    order: "02 ° 06",
    title: "title2",
    link: "https://bmi-calculate-chi.vercel.app/",
  },
  {
    order: "03 ° 06",
    title: "title3",
    link: "https://github.com/RomainRG31/Voyage-en-Grece-antique-WCS",
  },
  {
    order: "04 ° 06",
    title: "title4",
    link: "https://github.com/RomainRG31/Kasa",
  },
  {
    order: "05 ° 06",
    title: "title5",
    link: "https://github.com/RomainRG31/e-commerce-kanap",
  },

  {
    order: "06 ° 06",
    title: "title6",
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
    title6: string;
  };
}

export const projectTranslations: Translations = {
  fr: {
    title1: "CreativeCode - Éditeur de code en ligne",
    title2: "Calculateur d'IMC",
    title3: "Voyage en Grèce antique - WCS",
    title4: "Kasa - Site de location immobilière",
    title5: "Kanap - Ecommerce",
    title6: "Piiquante - Création d'une API REST",
  },
  en: {
    title1: "CreativeCode - Online code editor",
    title2: "BMI calculator",
    title3: "Voyage to Ancient Greece - WCS",
    title4: "Kasa - Real Estate Rental Website",
    title5: "Kanap - Ecommerce",
    title6: "Piiquante - Creating a REST API",
  },
};
