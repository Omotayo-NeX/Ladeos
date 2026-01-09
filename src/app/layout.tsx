import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ladeos - Professional Heavy Equipment Operator Training',
    template: '%s | Ladeos',
  },
  description: siteConfig.description,
  keywords: [
    'excavator training',
    'forklift training',
    'heavy equipment operator',
    'construction training',
    'excavator certification',
    'equipment operator training',
    'construction equipment',
    'operator certification',
  ],
  authors: [{ name: 'Ladeos' }],
  creator: 'Ladeos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Ladeos - Professional Heavy Equipment Operator Training',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ladeos Heavy Equipment Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladeos - Professional Heavy Equipment Operator Training',
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
