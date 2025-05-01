import { ReactNode } from 'react'

interface GridProps {
  children: ReactNode
  title?: string
  description?: string
}

export function Grid({ children, title, description }: GridProps) {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  )
} 