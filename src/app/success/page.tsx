'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FaCheckCircle } from 'react-icons/fa'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In production, you would verify the session with Stripe here
    // and show the download link only after verification
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [sessionId])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-industrial-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-100">
              <FaCheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Payment Successful!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Thank you for your purchase. Your order has been confirmed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-lg mb-4 text-gray-900">
                What's Next?
              </h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
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
                    Check your email for the download link and receipt
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
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
                    Download your training materials and start learning right
                    away
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
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
                    You have lifetime access to all future updates
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#products">
                <Button variant="primary">Browse More Products</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>

            {sessionId && (
              <p className="text-sm text-gray-500 mt-8">
                Order ID: {sessionId.slice(0, 20)}...
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
