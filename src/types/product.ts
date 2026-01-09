export interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  stripePriceId: string
  features: string[]
  image: string
  downloadUrl?: string
  badge?: string
}

export interface CheckoutSession {
  sessionId: string
  url: string
}
