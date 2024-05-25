interface Project {
  order: string;
  title: string;
  link: string;
}

export const dataProjects: Project[] = [
  {
    order: "01 ° 05",
    title: "title1",
    link: "https://github.com/RomainRG31/romainspipboy",
  },
  {
    order: "02 ° 05",
    title: "title2",
    link: "https://moovieslib.netlify.app",
  },
  {
    order: "03 ° 05",
    title: "title3",
    link: "https://happybeersday.vercel.app",
  },
  {
    order: "04 ° 05",
    title: "title4",
    link: "https://bmi-calculate-chi.vercel.app/",
  },

  {
    order: "05 ° 05",
    title: "title5",
    link: "https://kasa-nu-seven.vercel.app/Home",
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
    title1: "Pipboy de Romain - Traiteur d'informations personnelles vintage",
    title2: "MooviesLib - Vidéothèque en ligne",
    title3: "HappyBeersDay - Guide intéractif de choix de bière selon l'humeur",
    title4: "Calculateur d'IMC",
    title5: "Kasa - Site de location immobilière",
  },
  en: {
    title1: "Pipboy by Romain - Vintage Processor of personal information",
    title2: "MooviesLib - Online video library",
    title3:
      "HappyBeersDay - Interactive guide to beer choices depending on your mood",
    title4: "BMI calculator",
    title5: "Kasa - Real Estate Rental Website",
  },
};
