import { Container } from '@/components/ui/Container'
import { ProductCard } from './ProductCard'
import { products } from '@/config/products'

export function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Professional Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the training that fits your needs. All products include
            instant download and lifetime access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
