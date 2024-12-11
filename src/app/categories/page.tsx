"use client";
import { CategorySection } from '@/components/category/category-section';
import { ItemProductSection } from '@/components/items-product/item-product-section'

export default function CategoryPage() {
    return (
        <main className="bg-white">
            <section className="container mx-auto px-4 py-6">
                <CategorySection />
            </section>

            <section className="container mx-auto px-4 py-6">
                <ItemProductSection />
            </section>
        </main>
    );
}
