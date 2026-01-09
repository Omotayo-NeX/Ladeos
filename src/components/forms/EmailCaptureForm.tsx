'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailSubscriptionSchema, type EmailSubscriptionInput } from '@/lib/validators'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface EmailCaptureFormProps {
  inline?: boolean
  className?: string
}

export function EmailCaptureForm({ inline = false, className }: EmailCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailSubscriptionInput>({
    resolver: zodResolver(emailSubscriptionSchema),
  })

  const onSubmit = async (data: EmailSubscriptionInput) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSuccess(true)
        reset()
      } else {
        throw new Error(result.error || 'Subscription failed')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={cn('text-center', className)}>
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          You're all set!
        </h3>
        <p className="text-white/80">
          Check your inbox for your free guide.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        inline
          ? 'flex flex-col sm:flex-row gap-3 max-w-lg mx-auto'
          : 'space-y-4 max-w-md',
        className,
      )}
    >
      <div className={cn('flex-1', inline && 'w-full sm:w-auto')}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          className={cn(
            'w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-industrial-orange-500',
            errors.email
              ? 'border-red-500'
              : 'border-gray-300',
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        isLoading={isSubmitting}
        className={cn(inline && 'w-full sm:w-auto')}
      >
        {isSubmitting ? 'Subscribing...' : 'Get Free Guide'}
      </Button>

      {error && (
        <p className="text-red-500 text-sm col-span-full">{error}</p>
      )}

      <p className={cn(
        'text-xs text-white/70',
        inline && 'col-span-full text-center'
      )}>
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  )
}
