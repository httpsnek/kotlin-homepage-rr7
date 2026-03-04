import type { Route } from "./+types/home";
import { KotlinTabs } from "../components/Tabs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Homepage | JetBrains Test" },
  ];
}

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <KotlinTabs />
    </div>
  );
}