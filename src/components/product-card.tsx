import Link from "next/link";
import Image from 'next/image'
import { Product } from '@/types/product'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/product-details/${product.id}`}>
            <div className="group cursor-pointer">
                <div className="relative aspect-[5/3] overflow-hidden rounded-2xl">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                </div>
                <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">${product.price}</p>
                </div>
            </div>
        </Link>

    )
}

