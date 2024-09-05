export enum CategoryEnum {
  SAAS = "Startup",
  RECRUITER = "Recruteur",
  INDEPENDENT = "Indépendant",
}

export interface Content {
  title: string;
  subTitle: string;
  description: string;

  categories: Array<CategoryEnum>;

  image?: string;
  onClick?: () => void;
}

export const CONTENT: Array<Content> = [
  {
    title: "Développement de sites et d'applications web",
    subTitle: "",
    description:
      "Du site vitrine au site e-commerce, je vous accompagne dans la création de votre site web. Je vous propose des solutions sur mesure, adaptées à vos besoins et à votre budget.",
    image: "",
    categories: [CategoryEnum.INDEPENDENT, CategoryEnum.SAAS],
    onClick: () => {
      console.log("Click 1");
    },
  },
  {
    title: "Application mobiles Android et IOS",
    subTitle: "",
    description:
      "Créez votre application sur mesure. Je vous accompagne dans la création de votre application mobile, de la conception à la publication sur les stores.",
    image: "",
    categories: [CategoryEnum.INDEPENDENT, CategoryEnum.SAAS],
    onClick: () => {
      console.log("Click 1");
    },
  },
  {
    title: "Serveur et base de données",
    subTitle: "",
    description:
      "Besoin de gérer les données de vos utilisateurs ? Je vous propose des solutions d'hébergement et de stockage de données adaptées à vos besoins.",
    image: "",
    categories: [CategoryEnum.INDEPENDENT, CategoryEnum.SAAS],
    onClick: () => {
      console.log("Click 1");
    },
  },
  {
    title: "Solutions sur mesure",
    subTitle: "",
    description:
      "Vous avez un projet spécifique ? Je vous propose des solutions sur mesure pour réaliser votre projet.",
    image: "",
    categories: [CategoryEnum.INDEPENDENT, CategoryEnum.SAAS],
    onClick: () => {
      console.log("Click 1");
    },
  },
];
