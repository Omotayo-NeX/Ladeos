import { Container } from '@/components/ui/Container'
import {
  FaGraduationCap,
  FaShieldAlt,
  FaDownload,
  FaBook,
  FaBriefcase,
  FaSync,
} from 'react-icons/fa'

const features = [
  {
    icon: FaGraduationCap,
    title: 'Industry-Expert Training',
    description:
      'Learn from experienced operators with decades of real-world experience on construction sites.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety-First Approach',
    description:
      'Comprehensive safety protocols and OSHA compliance guidelines integrated throughout all training.',
  },
  {
    icon: FaDownload,
    title: 'Immediate Access',
    description:
      'Download your training materials instantly after purchase. Start learning right away.',
  },
  {
    icon: FaBook,
    title: 'Comprehensive Materials',
    description:
      'In-depth guides, checklists, and manuals covering every aspect of equipment operation.',
  },
  {
    icon: FaBriefcase,
    title: 'Career Advancement',
    description:
      'Gain the skills and knowledge employers are looking for to advance your construction career.',
  },
  {
    icon: FaSync,
    title: 'Lifetime Updates',
    description:
      'Receive free updates to your training materials as industry standards and best practices evolve.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
            Why Choose Ladeos Training
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional development designed by operators, for operators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg border-2 border-gray-200 hover:border-industrial-orange-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-industrial-orange-500 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
