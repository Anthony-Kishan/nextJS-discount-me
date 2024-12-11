import { SectionHeader } from '@/components/ui/section-header'
import { CategoryGrid } from '@/components/category/category-grid'
import { categories } from '@/data/category'
import { usePathname } from 'next/navigation'

export function CategorySection() {
    const pathname = usePathname() // Get the current pathname
    const isCategoryPage = pathname === '/categories' // Check if we are on the category page

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                {/* Conditionally render SectionHeader based on the page */}
                {!isCategoryPage && (
                    <SectionHeader
                        title="Items"
                        showEmoji={true}
                        actionHref="/categories"
                        actionLabel="See all"
                    />
                )}

                <CategoryGrid categories={categories} />
            </div>
        </section>
    )
}
