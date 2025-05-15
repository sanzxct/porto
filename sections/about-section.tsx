import { SectionHeader } from "@/components/macro/section-header"

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-0 py-32">
      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8">
        <SectionHeader
          title="A Glimpse of Me"
          description="Learn about who I am and what I’m capable of."
        />
      </div>
    </section>
  )
}
