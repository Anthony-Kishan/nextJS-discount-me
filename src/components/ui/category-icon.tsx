import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/types/category'

interface CategoryIconProps {
    category: Category
}

export function CategoryIcon({ category }: CategoryIconProps) {
    return (
        <Link
            href={category.href}
            className="flex flex-col items-center p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors duration-200 group"
        >
            <div className="w-16 h-16 rounded flex items-center justify-center mb-2 shadow-lg">
                <Image
                    src={category.icon}
                    alt={category.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
                />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                {category.name}
            </span>
        </Link>
    )
}

