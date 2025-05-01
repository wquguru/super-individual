import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

export function Card({ title, description, imageSrc, imageAlt, href }: CardProps) {
  return (
    <Link href={href} className="group">
      <div className="aspect-w-3 aspect-h-2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300"
          width={600}
          height={400}
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-base text-gray-500">
          {description}
        </p>
      </div>
    </Link>
  )
} 