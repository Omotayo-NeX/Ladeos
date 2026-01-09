'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gray-900 text-white min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero/excavator-hero.png)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent z-10" />

      {/* Content */}
      <Container className="relative z-20 px-4">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Master Heavy Equipment Operation
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-300">
            Professional digital training for excavator and forklift operators.
            Industry-expert instruction, safety-focused curriculum, instant
            access.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={() => scrollToSection('products')}
              variant="primary"
              size="lg"
            >
              Get Training Manual
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/2348062284991', '_blank')}
              variant="outline"
              size="lg"
              className="bg-transparent"
            >
              WhatsApp Us
            </Button>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-industrial-orange-500 border-2 border-gray-900 flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              Join 1,000+ operators who&apos;ve advanced their careers
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
