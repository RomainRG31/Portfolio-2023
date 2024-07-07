interface Project {
  order: string;
  title: string;
  link: string;
}

export const dataProjects: Project[] = [
  {
    order: "01 ° 06",
    title: "title1",
    link: "https://easy-access-wcs.vercel.app",
  },
  {
    order: "02 ° 06",
    title: "title2",
    link: "https://github.com/RomainRG31/romainspipboy",
  },
  {
    order: "03 ° 06",
    title: "title3",
    link: "https://moovieslib.netlify.app",
  },
  {
    order: "04 ° 06",
    title: "title4",
    link: "https://happybeersday.vercel.app",
  },
  {
    order: "05 ° 06",
    title: "title5",
    link: "https://bmi-calculate-chi.vercel.app/",
  },

  {
    order: "06 ° 06",
    title: "title6",
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
    title6: string;
  };
}

export const projectTranslations: Translations = {
  fr: {
    title1: "EasyAccess - Jeu de sensibilisation à la mobilité réduite",
    title2: "Pipboy de Romain - Traiteur d'informations personnelles vintage",
    title3: "MooviesLib - Vidéothèque en ligne",
    title4: "HappyBeersDay - Guide intéractif de choix de bière selon l'humeur",
    title5: "Calculateur d'IMC",
    title6: "Kasa - Site de location immobilière",
  },
  en: {
    title1: "EasyAccess - Reduced mobility awareness game",
    title2: "Pipboy by Romain - Vintage Processor of personal information",
    title3: "MooviesLib - Online video library",
    title4:
      "HappyBeersDay - Interactive guide to beer choices depending on your mood",
    title5: "BMI calculator",
    title6: "Kasa - Real Estate Rental Website",
  },
};
