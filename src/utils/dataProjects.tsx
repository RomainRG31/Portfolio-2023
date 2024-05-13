interface Project {
  order: string;
  title: string;
  link: string;
}

export const dataProjects: Project[] = [
  {
    order: "01 ° 04",
    title: "title1",
    link: "https://github.com/RomainRG31/romainspipboy",
  },
  {
    order: "02 ° 04",
    title: "title2",
    link: "https://moovieslib.netlify.app",
  },
  {
    order: "03 ° 04",
    title: "title3",
    link: "https://bmi-calculate-chi.vercel.app/",
  },

  {
    order: "04 ° 04",
    title: "title4",
    link: "https://kasa-nu-seven.vercel.app/Home",
  },
];

interface Translations {
  [key: string]: {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
  };
}

export const projectTranslations: Translations = {
  fr: {
    title1: "Pipboy de Romain - Traiteur d'informations personnelles",
    title2: "MooviesLib - Vidéothèque en ligne",
    title3: "Calculateur d'IMC",
    title4: "Kasa - Site de location immobilière",
  },
  en: {
    title1: "Pipboy by Romain - Processor of personal information",
    title2: "MooviesLib - Online video library",
    title3: "BMI calculator",
    title4: "Kasa - Real Estate Rental Website",
  },
};
