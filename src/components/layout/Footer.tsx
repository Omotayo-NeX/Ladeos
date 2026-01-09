import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">LADEOS</h3>
            <p className="text-gray-400 mb-4">
              Professional digital training for heavy equipment operators.
              Master excavator and forklift operation with industry-expert
              instruction.
            </p>
            <div className="flex space-x-4">
              {/* Social media links - add when available */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-industrial-orange-500 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-industrial-orange-500 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-industrial-orange-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-industrial-orange-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-industrial-orange-500 transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </li>
              {siteConfig.links.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.links.phone}`}
                    className="hover:text-industrial-orange-500 transition-colors"
                  >
                    {siteConfig.links.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ladeos. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                100% Secure Payments
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
