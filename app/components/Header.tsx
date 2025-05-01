import Link from 'next/link'
import { Button } from './Button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold">
              超级个体
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              首页
            </Link>
            <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              服务列表
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              关于我
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              联系方式
            </Link>
            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              博客/案例
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="primary">
              立即预订
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100" aria-label="打开菜单">
              <span className="sr-only">打开菜单</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 