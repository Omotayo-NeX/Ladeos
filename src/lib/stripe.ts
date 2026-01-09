import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

export async function createCheckoutSession(
  priceId: string,
  quantity: number = 1,
): Promise<Stripe.Checkout.Session> {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    automatic_tax: { enabled: false }, // Enable if you want automatic tax calculation
    allow_promotion_codes: true,
  })

  return session
}

export async function getCheckoutSession(
  sessionId: string,
): Promise<Stripe.Checkout.Session> {
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return session
}
