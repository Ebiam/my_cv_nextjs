import { ContentProvider } from "./contexts/content/ContentProvider";
import { ThemeAndStyleProvider } from "./contexts/theme_styles/ThemeAndStyleProvider";
import { MainContent, TopBar } from "./pages/main/MainContent";

export default function Home() {
  return (
    <ThemeAndStyleProvider>
      <ContentProvider>
      <main>
        <TopBar />
        <MainContent />
      </main>
      </ContentProvider>
    </ThemeAndStyleProvider>
  );
}
