import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { RealWorldExperienceSection } from '@/components/sections/RealWorldExperienceSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <RealWorldExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
