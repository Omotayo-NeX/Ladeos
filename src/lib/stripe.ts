import Stripe from 'stripe'

// Make Stripe optional - only initialize if key is present
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    })
  : null

export async function createCheckoutSession(
  priceId: string,
  quantity: number = 1,
): Promise<Stripe.Checkout.Session> {
  if (!stripe) {
    throw new Error('Stripe is not configured. Please set STRIPE_SECRET_KEY.')
  }

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
  if (!stripe) {
    throw new Error('Stripe is not configured. Please set STRIPE_SECRET_KEY.')
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return session
}
