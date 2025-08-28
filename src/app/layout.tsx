import type { Metadata } from 'next'
import { Geist_Mono, Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { MobileMenuProvider } from '@/contexts/mobile-menu-context'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TechNova',
  description:
    'TechNova - Đối tác công nghệ đáng tin cậy | Outsourcing IT Chuyên nghiệp',
  authors: [{ name: 'TechNova', url: 'https://TechNova.com' }],
  keywords:
    'outsourcing IT, thiết kế website, phát triển phần mềm, ứng dụng mobile, AI, TechNova, Sài Gòn, TP.HCM',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <MobileMenuProvider>{children}</MobileMenuProvider>
        <Toaster />
      </body>
    </html>
  )
}
