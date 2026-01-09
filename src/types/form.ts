export interface EmailSubscription {
  email: string
  firstName?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}
