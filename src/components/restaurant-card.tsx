import Image from 'next/image'
import { Star, MapPin } from 'lucide-react'
import type { Restaurant } from '@/types/restaurant'

interface RestaurantCardProps {
    restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-400">
            <div className="relative w-[92%] h-[240px] mx-auto mt-4 ">
                <Image
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-800">{restaurant.name}</h3>
                    <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                        <span className="text-gray-600">({restaurant.rating})</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-5 h-5" />
                    <p>{restaurant.address}</p>
                </div>
                <p className="text-gray-600 line-clamp-2">
                    {restaurant.description}
                    <button className="text-gray-500 hover:text-gray-700 ml-1">
                        Read More...
                    </button>
                </p>
                <button className="w-full py-3 px-4 bg-[#00B047] text-white rounded-lg hover:bg-[#009f40] transition-colors">
                    Visit
                </button>
            </div>
        </div>
    )
}

