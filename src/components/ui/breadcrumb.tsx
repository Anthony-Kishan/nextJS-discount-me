import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronRight } from 'lucide-react'
import { div } from 'framer-motion/client';

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div>
            <nav className="flex items-center space-x-2 text-md text-white px-12 bg-[url('/breadcrumb-bg.svg')]" style={{ width: '100%', height: '170px',  objectFit: 'cover' }} >
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
        </div>

    )
}

