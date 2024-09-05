export enum Style {
  DEV = "Développeur",
  SAAS = "SAAS",
  RESTAURANT = "Restaurant",
}

export const STYLES = {
  [Style.DEV]: {
    backgroundColor: "#fff",
    color: "#000",
  },
  [Style.SAAS]: {
    backgroundColor: "#000",
    color: "#fff",
  },
  [Style.RESTAURANT]: {
    backgroundColor: "#000",
    color: "#fff",
  },
};
