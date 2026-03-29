import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Great_Vibes, Amiri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-script',
})

const amiri = Amiri({ 
  subsets: ["arabic"],
  weight: ['400', '700'],
  variable: '--font-amiri',
})

export const metadata: Metadata = {
  title: 'Mohammed Shafi & Naseefa - Wedding Invitation',
  description: 'You are cordially invited to celebrate the wedding of Mohammed Shafi and Naseefa on April 13, 2026 at Akbar Auditorium, Ponnani. Join us on this beautiful journey of love.',
  generator: 'v0.app',
  openGraph: {
    title: 'Mohammed Shafi & Naseefa - Wedding Invitation',
    description: 'You are cordially invited to celebrate the wedding of Mohammed Shafi and Naseefa on April 13, 2026 at Akbar Auditorium, Ponnani.',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-jxt8PQWNhW11bMXTRTBabhp8Q6219q.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohammed Shafi & Naseefa Wedding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Shafi & Naseefa - Wedding Invitation',
    description: 'You are cordially invited to celebrate the wedding of Mohammed Shafi and Naseefa on April 13, 2026.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-jxt8PQWNhW11bMXTRTBabhp8Q6219q.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} ${amiri.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
