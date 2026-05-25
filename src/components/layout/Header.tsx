'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl font-bold text-white hover:text-industrial-orange-500 transition-colors"
          >
            LADEOS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-industrial-orange-500 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-white hover:text-industrial-orange-500 transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-industrial-orange-500 transition-colors font-medium"
            >
              Reviews
            </button>
            <Link
              href="/stories/tamuno"
              className="text-white hover:text-industrial-orange-500 transition-colors font-medium"
            >
              Stories
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-industrial-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('products')}
              variant="primary"
              size="sm"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-industrial-orange-500 transition-colors font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-white hover:text-industrial-orange-500 transition-colors font-medium text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-industrial-orange-500 transition-colors font-medium text-left"
              >
                Reviews
              </button>
              <Link
                href="/stories/tamuno"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-industrial-orange-500 transition-colors font-medium text-left"
              >
                Stories
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-industrial-orange-500 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('products')}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
