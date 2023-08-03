import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'],
                        weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'AI Movie',
  description: 'An app that uses an API to show all the movies that are heat at the moment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.className} bg-gradient-to-r from-principal-purple to-principal-pink`}>{children}</body>
    </html>
  )
}
