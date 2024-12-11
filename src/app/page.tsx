import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { Package, Truck, HeadphonesIcon, ShieldCheck, ChevronRight } from 'lucide-react'
import { SearchBox } from "../components/ui/search-box";
import { RestaurantGrid } from '@/components/restaurant-grid';
import { restaurants } from '@/data/restaurants';
import { ProductGrid } from '@/components/product-grid';
import { products } from '@/data/product';
// import { ExploreRestaurants } from '@/app/explore-restaurants/page';

import Image from 'next/image'
import { MapPin, Search, Package, Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react'
import React from "react";
import { RestaurantGrid } from '@/components/restaurant-grid'
import { Restaurant } from '@/types/restaurant'
import { ProductGrid } from '@/components/product-grid'
import { Product } from '@/types/product'


const restaurants: Restaurant[] = [
  {
    id: '1',
    name: "Trattoria dall'Oste",
    rating: 4.5,
    address: 'Via Luigi Alamanni, 3, 50123 Firenze',
    description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: '/images/home-restaurant/restaurant1.svg'
  },
  {
    id: '2',
    name: "Trattoria dall'Oste",
    rating: 4.5,
    address: 'Via Luigi Alamanni, 3, 50123 Firenze',
    description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: '/images/home-restaurant/restaurant1.svg'
  },
  {
    id: '3',
    name: "Trattoria dall'Oste",
    rating: 4.5,
    address: 'Via Luigi Alamanni, 3, 50123 Firenze',
    description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
    imageUrl: '/images/home-restaurant/restaurant1.svg'
  }
]

const products: Product[] = [
  {
    id: '1',
    name: 'Vegetable Lasagna',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '2',
    name: 'Brunch Special',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '3',
    name: 'Pasta Dish',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '4',
    name: 'Roasted Turkey',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '5',
    name: 'Mixed Platter',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '6',
    name: 'French Fries',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '7',
    name: 'Classic Lasagna',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '8',
    name: 'Special Brunch',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  },
  {
    id: '9',
    name: 'Pasta Special',
    price: 125,
    imageUrl: '/images/home-food/product1.svg'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Good <span className="text-[#FF7D29]">food</span>, great memories
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                Enable diners to customize their booking by requesting a specific table location or view.
              </p>

              {/* SEARCH BAR */}
              <SearchBox></SearchBox>
            </div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/home-hero/arrow.svg"
                alt="arrow"
                fill
                className="absolute -translate-y-[35%] -translate-x-[70%]"
                priority
              ></Image>
              <Image
                src="/images/home-hero/Coffee shop-amico 1.svg"
                alt="Restaurant Interior"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </section>

{/* FEATURE CARDS SECTION */}
        <section className="container mx-auto px-20 py-12 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-xl shadow-sm">
              <div className="relative max-w-xl">
                <div className="flex items-center gap-2 h-[4rem] bg-white rounded-full border border-black shadow-sm">
                  <button className="flex items-center gap-2 mx-1 my-0.5  px-4 py-4 text-white bg-[#00B047] rounded rounded-l-full">
                    <MapPin className="w-5 h-5" />
                    <span className="hidden sm:inline">Location</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Search for restaurants..."
                    className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
                  />
                  <button className="p-3 text-white bg-[#00B047] rounded-full absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/home-hero/arrow.svg"
                alt="arrow"
                fill
                className="absolute -translate-y-[35%] -translate-x-[70%]"
                priority
              ></Image>
              <Image
                src="/images/home-hero/Coffee shop-amico 1.svg"
                alt="Restaurant Interior"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-20 py-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-xl shadow-sm">
            <FeatureCard
              icon={<Package className="w-6 h-6" />}
              title="Discount"
              description="Every week new sales"
            />
            <FeatureCard
              icon={<Truck className="w-6 h-6" />}
              title="Free Delivery"
              description="100% Free for all orders"
            />
            <FeatureCard
              icon={<HeadphonesIcon className="w-6 h-6" />}
              title="Great Support 24/7"
              description="We care your experiences"
            />
            <FeatureCard
            />
            <FeatureCard
              icon={<HeadphonesIcon className="w-6 h-6" />}
              title="Great Support 24/7"
              description="We care your experiences"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Secure Payment"
              description="100% Secure Payment Method"
            />
          </div>
        </section>

        {/* EXPLORE RESTAURANTS SECTION */}
        {/* <section className="container mx-auto px-4 py-12 relative">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              Explore <span className="text-[#FF7D29]">Restaurants</span>
            </h1>
            <Link href="/explore-restaurants" className="text-black text-lg items-center text-center flex">See All <ChevronRight /></Link>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-lg">
            Check your city Near by <br></br> Restaurant
          </p>
          <RestaurantGrid restaurants={restaurants} />
        </section> */}

<section className="container mx-auto px-4 py-12 relative">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              Explore <span className="text-[#FF7D29]">Restaurants</span>
            </h1>
            <Link href="/explore-restaurants" className="text-black text-lg items-center text-center flex">See All <ChevronRight /></Link>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-lg">
            Check your city Near by <br /> Restaurant
          </p>

          {/* Pass isHomePage={true} for Home page */}
          <RestaurantGrid restaurants={restaurants} isHomePage={true} />
        </section>


        {/* PRODUCTS SECTION */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-3xl md:text-3xl mb-4 font-bold leading-tight">
            Products
          </h1>
        <section className="mx-auto px-4 py-12">
          <RestaurantGrid restaurants={restaurants} />
        </section>

        <section className="mx-auto px-8 py-12">
          <ProductGrid products={products} />
        </section>
      </main>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4 p-6">
      <div className="p-2">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}