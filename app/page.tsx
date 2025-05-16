import { AboutSection } from "@/sections/about-section"
import { HeroSection } from "@/sections/hero-section"
import { ProjectSection } from "@/sections/project-section"

export default function Page() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
