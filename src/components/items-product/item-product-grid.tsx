import { ProductCard } from '@/components/items-product/item-product-card'
import type { Product } from '@/types/item-product'

interface ProductGridProps {
    products: Product[]
    isCategoryPage: boolean
    isRestaurantPage: boolean
}

export function ProductGrid({ products, isCategoryPage, isRestaurantPage }: ProductGridProps) {
    const gridCols = isCategoryPage ? 'lg:grid-cols-3 grid-cols-1 sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3'

    let productsToShow = products
    if (isCategoryPage) {
        productsToShow = products.slice(0, 15) // Show 15 items on CategoryPage
    } else if (isRestaurantPage) {
        productsToShow = products.slice(0, 9) // Show 9 items (3x3) on RestaurantPage
    }

    return (
        <div className={`grid gap-6 ${gridCols}`}>
            {productsToShow.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

