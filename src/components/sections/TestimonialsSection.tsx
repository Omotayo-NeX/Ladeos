import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { FaCheckCircle, FaCertificate, FaUsers, FaHardHat } from 'react-icons/fa'

const benefits = [
  {
    icon: FaHardHat,
    title: 'Hands-On Experience',
    description:
      'Train with real equipment on actual job sites. Our practical approach ensures you\'re ready for day-one operations with confidence and competence.',
  },
  {
    icon: FaCertificate,
    title: 'Industry Certification',
    description:
      'Receive recognized certifications that employers trust. Our comprehensive training program meets and exceeds industry safety standards.',
  },
  {
    icon: FaUsers,
    title: 'Career Support',
    description:
      'Access job placement assistance and ongoing support. Join a network of operators who\'ve successfully launched their heavy equipment careers.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
            What You&apos;ll Gain
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Comprehensive training designed to launch your heavy equipment career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-4 md:p-6">
                  {/* Icon */}
                  <div className="mb-3 md:mb-4 flex justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-industrial-orange-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-industrial-orange-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-700 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
