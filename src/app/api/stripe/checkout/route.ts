import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { priceId, quantity } = await req.json()

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 },
      )
    }

    const session = await createCheckoutSession(priceId, quantity || 1)

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error) {
    console.error('Checkout session error:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Error creating checkout session',
      },
      { status: 500 },
    )
  }
}
