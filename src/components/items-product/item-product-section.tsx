import { usePathname } from 'next/navigation'
import { ProductGrid } from '@/components/items-product/item-product-grid'
import { products } from '@/data/item-product'

export function ItemProductSection() {
    const pathname = usePathname() // Get current pathname
    const isCategoryPage = pathname === '/categories' // Check if on CategoryPage
    const isRestaurantPage = pathname === '/restaurant' // Check if on RestaurantPage

    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Pass the flags to ProductGrid to control layout */}
                <ProductGrid
                    products={products}
                    isCategoryPage={isCategoryPage}
                    isRestaurantPage={isRestaurantPage}
                />
            </div>
        </section>
    )
}

