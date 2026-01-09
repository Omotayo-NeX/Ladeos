'use client'

import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const trainingImages = [
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.20 (1).jpeg',
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.20.jpeg',
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.21.jpeg',
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.22 (1).jpeg',
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.22.jpeg',
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.23.jpeg',
  '/images/training-pictures/WhatsApp Image 2025-12-19 at 13.50.24.jpeg',
]

export function RealWorldExperienceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-World Training Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our instructors bring years of hands-on experience operating heavy
            equipment in real job sites. See our training in action.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-4 md:-mx-6 lg:-mx-8">
          <div className="flex gap-6 px-4 md:px-6 lg:px-8 pb-4 w-max">
            {trainingImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[280px] md:w-[350px] lg:w-[400px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <Image
                  src={image}
                  alt={`Real-world training experience ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-16 bg-gray-900 py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-industrial-orange-500 mb-2">
                30+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-industrial-orange-500 mb-2">
                1,000+
              </div>
              <div className="text-gray-300">Operators Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-industrial-orange-500 mb-2">
                50+
              </div>
              <div className="text-gray-300">Job Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-industrial-orange-500 mb-2">
                100%
              </div>
              <div className="text-gray-300">Safety First</div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
