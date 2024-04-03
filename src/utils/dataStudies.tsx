interface Study {
  year: string;
  study: string;
}

export const dataStudies: Study[] = [
  {
    year: "2024 - Today",
    study: "st1",
  },
  {
    year: "2022 - 2023",
    study: "st2",
  },
  {
    year: "2016 - 2018",
    study: "st3",
  },
];

interface Translations {
  [key: string]: {
    st1: string;
    st2: string;
    st3: string;
  };
}

export const translations: Translations = {
  fr: {
    st1: "Développeur Web, Wildcodeschool",
    st2: "Développeur web, Openclassrooms",
    st3: "Formation au BTS Métiers des services à l'environnement",
  },
  en: {
    st1: "Web Developer, Wildcodeschool",
    st2: "Web Developer, Openclassrooms",
    st3: "BTEC Higher National Diploma training in environmental services professions",
  },
};
