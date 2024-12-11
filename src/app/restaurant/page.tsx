"use client";
import { useState } from 'react'; // Import useState hook
import { ImageCarousel } from '@/components/ui/image-carousel';
import { RestaurantHeader } from '@/components/restaurant/restaurant-header';
import { RestaurantFeatures } from '@/components/restaurant/restaurant-feature';
import { CategorySection } from '@/components/category/category-section';
import { ItemProductSection } from '@/components/items-product/item-product-section'


const restaurantImages = [
    '/images/restaurant-page/carousel-images/villagio1.svg',
    '/images/restaurant-page/carousel-images/villagio1.svg',
    '/images/restaurant-page/carousel-images/villagio1.svg',
];

export default function RestaurantPage() {
    // State for controlling the visibility of the restaurant features
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Toggle function for menu visibility
    const onMenuToggle = () => {
        setIsMenuVisible(prevState => !prevState);
    };

    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 py-6">
                {/* Hero Image Carousel */}
                <ImageCarousel
                    images={restaurantImages}
                    aspectRatio="aspect-[21/9]"
                />

                {/* Restaurant Information */}
                <div className="mt-6">
                    <RestaurantHeader
                        name="Villagio Restaurant & Bar"
                        address="360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865"
                        rating={4.3}
                        onMenuToggle={onMenuToggle} // Pass onMenuToggle to the RestaurantHeader
                    />
                </div>

                {/* Restaurant Features */}
                <RestaurantFeatures isVisible={isMenuVisible} /> {/* Pass the visibility state to RestaurantFeatures */}
            </div>
            <section className="container mx-auto px-4 py-6">
                <CategorySection />
            </section>

            <section className="container mx-auto px-4 py-6">
                <ItemProductSection />
            </section>
        </section>

    );
}
