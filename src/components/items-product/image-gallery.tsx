'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface ImageGalleryProps {
    images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
                <button
                    className="p-1 hover:text-[#FF7A00]"
                    onClick={() => setSelectedImage((prev) =>
                        prev > 0 ? prev - 1 : images.length - 1
                    )}
                >
                    <ChevronUp className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className={`relative w-20 h-20 border-2 rounded-lg overflow-hidden
                ${selectedImage === index ? 'border-[#FF7A00]' : 'border-transparent'}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image
                                src={image}
                                alt={`Product thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>

                <button
                    className="p-1 hover:text-[#FF7A00]"
                    onClick={() => setSelectedImage((prev) =>
                        prev < images.length - 1 ? prev + 1 : 0
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square rounded-lg overflow-hidden">
                <Image
                    src={images[selectedImage]}
                    alt="Product main image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}

