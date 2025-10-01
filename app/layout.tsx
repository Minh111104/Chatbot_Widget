import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chatbot Widget',
  description: 'AI-powered chatbot widget for your website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
