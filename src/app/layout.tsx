import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sigma Saunas - Smart Home Sauna Tracking & Safety',
  description: 'AI-powered sauna safety monitoring with real-time sensors, guided meditation, and emergency alerts for home sauna owners.',
  keywords: 'sauna tracker, sauna safety, home sauna, AI meditation, sensor monitoring, wellness tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

