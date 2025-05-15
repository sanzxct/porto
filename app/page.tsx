import { AboutSection } from "@/sections/about-section";
import { HeroSection } from "@/sections/hero-section";

export default function Page() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
