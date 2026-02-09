import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
