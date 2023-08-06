import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Limpan Tools',
  description: 'Tools for Limpan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className='text-4xl font-semibold text-center'>Tools</h1>
        {children}
      </body>
    </html>
  )
}
