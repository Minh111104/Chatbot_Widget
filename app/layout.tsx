import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Minh's AI Assistant",
  description: 'AI-powered assistant to help you learn about Minh\'s work and projects',
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
