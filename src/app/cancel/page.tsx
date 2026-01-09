import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FaTimesCircle } from 'react-icons/fa'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-orange-100">
              <FaTimesCircle className="w-10 h-10 text-industrial-orange-500" />
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Payment Cancelled
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Your payment was cancelled. No charges were made to your account.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-lg mb-4 text-gray-900">
                Still Interested?
              </h2>
              <p className="text-gray-700 mb-4">
                Our training programs can help you advance your career in heavy
                equipment operation. We offer:
              </p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-industrial-orange-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-industrial-orange-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Instant Download Access</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-industrial-orange-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Lifetime Updates Included</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#products">
                <Button variant="primary">View Products Again</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
