import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
                <Home className="h-4 w-4" />
            </Link>
            {items.map((item, index) => (
                <div key={item.href} className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                    <Link
                        href={item.href}
                        className={`hover:text-gray-900 ${index === items.length - 1 ? 'text-[#FF7A00]' : ''
                            }`}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </nav>
    )
}

