export enum ThemeEnum {
  LIGHT = "Clair",
  DARK = "Obscur",
}

export interface Theme {
  backgroundColor: string;
  color: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export const THEMES = {
  [ThemeEnum.LIGHT]: {
    backgroundColor: "rgb(224,224,225)",
    color: "#3a679a87", // #3a679a87
    primaryColor: "#3a679a",
    secondaryColor: "#2b91c0",
    tertiaryColor: "#3a679a",
  } as Theme,
  [ThemeEnum.DARK]: {
    backgroundColor: "#000",
    color: "#fff",
    primaryColor: "#1d5fa3",
    secondaryColor: "#2b91c0",
    tertiaryColor: "#3a679a",
  } as Theme,
};
