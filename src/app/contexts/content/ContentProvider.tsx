"use client"
import { createContext, ReactNode, useState } from "react";
import { CategoryEnum, CONTENT, Content } from "./dto/content.dto";

export interface ContentProps {
    content: Array<Content>;
    selectedCategory: CategoryEnum,
    setSelectedCategory: (category: CategoryEnum) => {},
}

export const ContentContext = createContext({
    content: CONTENT,
    selectedCategory: CategoryEnum.INDEPENDENT,
    setSelectedCategory: (category: CategoryEnum) => {},
});

export function ContentProvider({
  children,
}: {
  children: ReactNode;
}) {
    const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(CategoryEnum.INDEPENDENT);

  return (
    <ContentContext.Provider value={{ content: CONTENT, selectedCategory, setSelectedCategory }}>
      {children}
    </ContentContext.Provider>
  );
}
