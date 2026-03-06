import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { UsageSection } from "../components/UsageSection";
import { KotlinTabs } from "../components/Tabs"; 
import { LatestNewsSection } from "../components/LatestNewsSection";
import { StartSection } from "../components/StartSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Homepage | JetBrains Test" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        
        <UsageSection />
        
        {}
        <div style={{ backgroundColor: "#fff", paddingTop: "96px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ maxWidth: "1216px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "56px", fontWeight: "bold", marginBottom: "48px", color: "#19191c", fontFamily: '"Inter", system-ui, sans-serif', letterSpacing: "-1px" }}>
              Why Kotlin
            </h1>
            <KotlinTabs />
          </div>
        </div>

        <LatestNewsSection />
        
        <StartSection />
      </main>

      <Footer />
    </>
  );
}