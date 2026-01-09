import { Container } from '@/components/ui/Container'
import { EmailCaptureForm } from '@/components/forms/EmailCaptureForm'

export function EmailCaptureSection() {
  return (
    <section id="email-capture" className="py-16 md:py-24 bg-industrial-orange-500">
      <Container>
        <div className="text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get our free guide: <strong>&ldquo;10 Essential Skills Every Equipment Operator Must Master&rdquo;</strong>
          </p>

          <EmailCaptureForm inline className="mb-6" />
        </div>
      </Container>
    </section>
  )
}
