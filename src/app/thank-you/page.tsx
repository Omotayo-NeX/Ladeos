import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-100">
              <FaCheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              You're All Set!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Thank you for signing up. Check your inbox for your free guide.
            </p>

            <div className="bg-industrial-orange-50 rounded-lg p-6 mb-8 border-2 border-industrial-orange-200">
              <FaEnvelope className="w-12 h-12 text-industrial-orange-500 mx-auto mb-4" />
              <h2 className="font-bold text-lg mb-2 text-gray-900">
                Check Your Email
              </h2>
              <p className="text-gray-700">
                We've sent your free guide <strong>"10 Essential Skills Every
                Equipment Operator Must Master"</strong> to your inbox.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-lg mb-4 text-gray-900">
                What to Expect
              </h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Valuable training tips and industry insights delivered to
                    your inbox
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Exclusive discounts on our premium training programs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Early access to new training materials and resources
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#products">
                <Button variant="primary">View Training Programs</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Didn't receive the email? Check your spam folder or{' '}
              <Link href="/#contact" className="text-industrial-orange-500 hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
