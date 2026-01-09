'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { products } from '@/config/products'
import Image from 'next/image'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

export function ProductsSection() {
  const mainProduct = products.find(p => p.id === 'excavator-training-manual')

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Main Headline */}
        <div className="text-center mb-8 md:mb-16 px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
            Your Complete Guide to Becoming a <span className="text-industrial-orange-500">Competent Excavator Operator</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Master excavator operation with professional training slides trusted by operators across the industry
          </p>
        </div>

        {/* Hero Product Showcase */}
        <div className="bg-white rounded-lg md:rounded-2xl shadow-2xl overflow-hidden mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Book Cover */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[2/3] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/book.png"
                  alt="Excavator Operator Training Manual"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <div className="inline-block">
                <span className="bg-industrial-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  COMPLETE TRAINING PROGRAM
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                Excavator Operator Training Manual
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                Everything you need to become a skilled, certified excavator operator. This comprehensive manual includes complete training slides and practical evaluation support.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Complete Training Slides</h4>
                    <p className="text-gray-600">Step-by-step instruction from basics to advanced techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Safety-Focused Curriculum</h4>
                    <p className="text-gray-600">Industry-standard safety protocols and best practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Practical Evaluation Available</h4>
                    <p className="text-gray-600">Get hands-on assessment and certification support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Instant Digital Access</h4>
                    <p className="text-gray-600">Download immediately and start learning today</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">${mainProduct?.price}</span>
                  <span className="text-gray-500 line-through text-base md:text-xl">$99.99</span>
                  <span className="bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">SAVE 50%</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">One-time payment • Lifetime access • No recurring fees</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 md:space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full text-sm sm:text-base md:text-lg py-4 md:py-6"
                  onClick={() => {
                    // Add to cart or checkout logic
                    window.location.href = `#contact`
                  }}
                >
                  Get Your Training Manual Now
                </Button>

                <a
                  href="https://wa.me/2348062284991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                  WhatsApp for Practical Evaluation
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-1 md:gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="whitespace-nowrap">Instant Download</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="whitespace-nowrap">30+ Years</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="whitespace-nowrap">1,000+ Trained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Inside Section */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            What&apos;s Inside the Training Manual
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-12">
            A comprehensive curriculum designed by industry experts with 30+ years of hands-on experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {mainProduct?.features.map((feature, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-industrial-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-industrial-orange-500 font-bold text-lg md:text-xl">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-industrial-orange-500 to-industrial-orange-600 rounded-lg md:rounded-2xl p-6 md:p-8 lg:p-12 text-center text-white">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Ready to Start Your Excavator Career?
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90">
            Join 1,000+ operators who&apos;ve transformed their careers with our training program
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-industrial-orange-500 hover:bg-gray-100 border-0 text-sm sm:text-base md:text-lg py-4 md:py-6 px-6 sm:px-8 md:px-12"
            onClick={() => {
              window.location.href = `#contact`
            }}
          >
            Get Started Today - $50.99
          </Button>
        </div>
      </Container>
    </section>
  )
}
