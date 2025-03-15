interface Work {
  year: string;
  experiences: string;
}

export const dataWorks: Work[] = [
  {
    year: "2023",
    experiences: "exp1",
  },
  {
    year: "2018 - 2023",
    experiences: "exp2",
  },
  {
    year: "2015 - 2018",
    experiences: "exp3",
  },
  {
    year: "2012 - 2015",
    experiences: "exp4",
  },
  {
    year: "2011 - 2012",
    experiences: "exp5",
  },
];

interface Translations {
  [key: string]: {
    exp1: string;
    exp2: string;
    exp3: string;
    exp4: string;
    exp5: string;
  };
}

export const translations: Translations = {
  fr: {
    exp1: "Développeur Wordpress, 3S GESTION",
    exp2: "Responsable de travaux exceptionnels, GIMN'S",
    exp3: "Technicien hygiène & propreté, GIMN'S",
    exp4: "Agent de piste, Aéroport Toulouse-Blagnac",
    exp5: "Militaire du rang, 93 RAM",
  },
  en: {
    exp1: "Wordpress Developer, 3S GESTION",
    exp2: "Responsible for exceptional works, GIMN'S",
    exp3: "Hygiene & Cleanliness Technician, GIMN'S",
    exp4: "Ramp Agent, Toulouse-Blagnac Airport",
    exp5: "Military, 93 RAM",
  },
};
