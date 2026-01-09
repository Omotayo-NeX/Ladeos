import { Container } from '@/components/ui/Container'

const stats = [
  { number: '1,000+', label: 'Operators Trained' },
  { number: '50+', label: 'Companies Trust Us' },
  { number: '95%', label: 'Success Rate' },
  { number: '100%', label: 'Satisfaction Guarantee' },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-industrial-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
