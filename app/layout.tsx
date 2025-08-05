import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '5p App',
  description: 'Created with ouz',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
