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

