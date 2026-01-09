import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'excavator-operator-course',
    name: 'Become a Competent Excavator Operator',
    description: 'Comprehensive training program to master excavator operation from basics to advanced techniques.',
    longDescription: 'Our flagship excavator operator course provides everything you need to become a skilled, safety-conscious excavator operator. From understanding machine controls to mastering complex digging techniques, this comprehensive program prepares you for real-world job sites.',
    price: 99.99,
    stripePriceId: 'price_placeholder_1', // Replace with actual Stripe price ID
    features: [
      'Complete excavator controls and operations',
      'Safety protocols and best practices',
      'Pre-operation inspection procedures',
      'Basic and advanced digging techniques',
      'Load handling and placement',
      'Site safety and hazard awareness',
      'Maintenance fundamentals',
      'Certificate of completion',
    ],
    image: '/images/products/excavator-course.jpg',
    badge: 'Most Popular',
  },
  {
    id: 'excavator-training-manual',
    name: 'Excavator Operator Training Manual',
    description: 'In-depth reference guide covering all aspects of excavator operation, maintenance, and safety.',
    longDescription: 'A comprehensive manual that serves as your complete reference for excavator operation. Perfect for both new operators and experienced professionals looking to refresh their knowledge or prepare for certification.',
    price: 49.99,
    stripePriceId: 'price_placeholder_2', // Replace with actual Stripe price ID
    features: [
      'Detailed equipment overview',
      'Step-by-step operation instructions',
      'Safety guidelines and regulations',
      'Troubleshooting common issues',
      'Maintenance schedules and procedures',
      'Emergency response protocols',
      'Industry best practices',
      'Printable PDF format',
    ],
    image: '/images/products/training-manual.jpg',
  },
  {
    id: 'excavator-operation-checklist',
    name: 'Excavator Operation Checklist',
    description: 'Essential daily checklist ensuring safe and efficient excavator operation every time.',
    longDescription: 'Never miss a critical safety check again. This professional checklist covers everything from pre-operation inspection to shutdown procedures, ensuring you operate safely and efficiently every single day.',
    price: 19.99,
    stripePriceId: 'price_placeholder_3', // Replace with actual Stripe price ID
    features: [
      'Daily pre-operation inspection checklist',
      'During operation safety checks',
      'Post-operation shutdown procedures',
      'Weekly maintenance checklist',
      'Printable and editable format',
      'OSHA compliance guidelines',
      'Equipment condition logging',
      'Instant download',
    ],
    image: '/images/products/checklist.jpg',
    badge: 'Best Value',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductByStripeId(stripePriceId: string): Product | undefined {
  return products.find((product) => product.stripePriceId === stripePriceId)
}
