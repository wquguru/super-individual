import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "超级个体 - 专业的个人品牌服务平台",
    template: "%s | 超级个体"
  },
  description: '专业的技术咨询和职业发展指导服务，提供React.js、Python、Golang等技术指导以及职业规划咨询',
  keywords: ['技术咨询', '职业发展', 'React.js', 'Python', 'Golang', '个人品牌'],
  authors: [{ name: '超级个体' }],
  creator: '超级个体',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg'
  },
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 