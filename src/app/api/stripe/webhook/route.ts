import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { getProductByStripeId } from '@/config/products'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not configured')
    }

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : 'Webhook signature verification failed',
      },
      { status: 400 },
    )
  }

  // Handle different event types
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // Get customer email
        const customerEmail = session.customer_details?.email

        // Get purchased product
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id,
        )
        const priceId = lineItems.data[0]?.price?.id

        if (priceId) {
          const product = getProductByStripeId(priceId)

          if (product && customerEmail) {
            // TODO: Send download link email to customer
            console.log('Payment successful:', {
              email: customerEmail,
              product: product.name,
              downloadUrl: product.downloadUrl,
            })

            // TODO: Add customer to email list with "customer" tag
            // TODO: Send product download link via email
          }
        }

        break
      }

      case 'payment_intent.succeeded': {
        console.log('Payment intent succeeded')
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Webhook handler error',
      },
      { status: 500 },
    )
  }
}
