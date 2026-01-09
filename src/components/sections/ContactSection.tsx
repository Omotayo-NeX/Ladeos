import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { siteConfig } from '@/config/site'
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We&apos;re here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-industrial-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-industrial-orange-500 hover:underline"
                  >
                    {siteConfig.links.email}
                  </a>
                </div>
              </div>

              {siteConfig.links.phone && (
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-industrial-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="text-industrial-orange-500 hover:underline"
                    >
                      {siteConfig.links.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start">
                <div className="w-12 h-12 bg-industrial-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaClock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Response Time
                  </h4>
                  <p className="text-gray-600">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Expert industry professionals
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  100% satisfaction guarantee
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Instant access to materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
