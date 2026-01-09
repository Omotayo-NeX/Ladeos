'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/types/product'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { FaCheck } from 'react-icons/fa'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchase = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: product.stripePriceId }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Purchase error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="h-full flex flex-col">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-industrial-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {product.badge}
          </div>
        )}
      </div>

      <CardContent className="flex-1 flex flex-col p-6">
        <h3 className="font-display text-xl font-bold mb-2 text-gray-900">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {product.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="w-4 h-4 text-industrial-orange-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
          {product.features.length > 4 && (
            <li className="text-sm text-gray-500 italic">
              + {product.features.length - 4} more features
            </li>
          )}
        </ul>

        {/* Price and Button */}
        <div>
          <div className="text-3xl font-bold text-gray-900 mb-4">
            {formatPrice(product.price)}
          </div>
          <Button
            onClick={handlePurchase}
            variant="primary"
            className="w-full"
            isLoading={isLoading}
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
