"use client";
import { MapPin, Menu, X } from 'lucide-react'
import { Rating } from '@/components/ui/rating'

interface RestaurantHeaderProps {
    name: string;
    address: string;
    rating: number;
    onMenuToggle: () => void; // Add onMenuToggle prop here
}

export function RestaurantHeader({
    name,
    address,
    rating,
    onMenuToggle, // Destructure onMenuToggle
}: RestaurantHeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">
                    <span className="text-[#00A651]">Villagio</span> Restaurant & Bar
                </h1>
                <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#00A651]" />
                    <p className="text-sm mt-1 leading-tight">{address}</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Rating value={rating} size="lg" />
                </div>
            </div>
            <button onClick={onMenuToggle}> {/* Add a button or icon to trigger menu toggle */}
                <span> <Menu></Menu> </span> {/* This can be a menu icon, for example */}
            </button>
        </div>
    );
}


