import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup MVP Validator — Validate startup ideas with market data',
  description: 'Analyze market size, competition, and demand signals for your startup idea. Get a full validation report in minutes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec56c3c1-efaf-49c8-a7dc-6d3fb4ebc43d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
