'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
    images: string[]
    aspectRatio?: string
}

export function ImageCarousel({ images, aspectRatio = 'aspect-[21/9]' }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => setCurrentIndex((i) => (i + 1) % images.length)
    const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length)

    return (
        <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-lg`}>
            <Image
                src={images[currentIndex]}
                alt={`Restaurant image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
                aria-label="Previous image"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
                aria-label="Next image"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    )
}

