import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "超级个体",
  description: '专业的技术咨询和职业发展指导服务',
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