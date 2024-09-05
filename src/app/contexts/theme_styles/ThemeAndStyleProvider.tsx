import { createContext, ReactNode, useState } from "react";
import { Style } from "./dto/style.dto";
import { ThemeEnum } from "./dto/theme.dto";

export interface ThemingContextProps {
  theme: ThemeEnum;
  style: Style;
  setTheme: (theme: ThemeEnum) => void;
  setStyle: (style: Style) => void;
}

export const ThemingContext = createContext({
  theme: ThemeEnum.LIGHT,
  style: Style.DEV,
  setTheme: (theme: ThemeEnum) => {},
  setStyle: (style: Style) => {},
});

export function ThemeAndStyleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK);
  const [style, setStyle] = useState<Style>(Style.DEV);

  return (
    <ThemingContext.Provider value={{ theme, style, setTheme, setStyle }}>
      {children}
    </ThemingContext.Provider>
  );
}
