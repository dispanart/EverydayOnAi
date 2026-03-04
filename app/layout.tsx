import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'EverydayOnAI - Your Daily Dose of Artificial Intelligence',
  description: 'Discover the latest in AI for business, tools, creativity, and lifestyle. EverydayOnAI brings you expert reviews, insights, and practical AI guides.',
  keywords: ['AI', 'Artificial Intelligence', 'AI Tools', 'AI Business', 'AI Lifestyle', 'AI Creativity'],
  openGraph: {
    title: 'EverydayOnAI - Your Daily Dose of Artificial Intelligence',
    description: 'Discover the latest in AI for business, tools, creativity, and lifestyle.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
