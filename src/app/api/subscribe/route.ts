import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/convertkit'
import { emailSubscriptionSchema } from '@/lib/validators'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const validated = emailSubscriptionSchema.parse(body)

    // Subscribe to ConvertKit
    const result = await subscribeToNewsletter(
      validated.email,
      validated.firstName,
    )

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed!',
      })
    } else {
      throw new Error(result.error || 'Subscription failed')
    }
  } catch (error) {
    console.error('Subscribe error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : 'Failed to subscribe',
      },
      { status: 500 },
    )
  }
}
