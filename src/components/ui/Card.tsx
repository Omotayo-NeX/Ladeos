import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function Card({
  children,
  hover = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border-2 border-gray-200 rounded-lg shadow-md',
        hover &&
          'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pt-0 flex items-center', className)}
      {...props}
    >
      {children}
    </div>
  )
}
