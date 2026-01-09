import axios from 'axios'

const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3'
const API_KEY = process.env.CONVERTKIT_API_KEY
const FORM_ID = process.env.CONVERTKIT_FORM_ID

interface SubscribeResponse {
  success: boolean
  data?: any
  error?: any
}

export async function subscribeToNewsletter(
  email: string,
  firstName?: string,
  tags?: string[],
): Promise<SubscribeResponse> {
  if (!API_KEY || !FORM_ID) {
    console.error('ConvertKit API credentials not configured')
    return {
      success: false,
      error: 'Email service not configured',
    }
  }

  try {
    const response = await axios.post(
      `${CONVERTKIT_API_URL}/forms/${FORM_ID}/subscribe`,
      {
        api_key: API_KEY,
        email,
        first_name: firstName,
        tags,
      },
    )

    return { success: true, data: response.data }
  } catch (error) {
    console.error('ConvertKit subscription error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Subscription failed',
    }
  }
}

export async function tagSubscriber(
  subscriberId: string,
  tagId: string,
): Promise<SubscribeResponse> {
  if (!API_KEY) {
    return { success: false, error: 'API key not configured' }
  }

  try {
    await axios.post(`${CONVERTKIT_API_URL}/tags/${tagId}/subscribe`, {
      api_key: API_KEY,
      subscriber_id: subscriberId,
    })
    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Tagging failed',
    }
  }
}
