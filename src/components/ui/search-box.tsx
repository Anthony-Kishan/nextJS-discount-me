"use client";
import { MapPin, Search } from 'lucide-react';


export function SearchBox(){
    return (
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
    )
}
