import { CategoryIcon } from '@/components/ui/category-icon'
import { Category } from '@/types/category'

interface CategoryGridProps {
    categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
            {categories.map((category) => (
                <CategoryIcon key={category.id} category={category} />
            ))}
        </div>
    )
}

