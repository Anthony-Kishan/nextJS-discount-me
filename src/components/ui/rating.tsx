import { Star } from 'lucide-react'

interface RatingProps {
    value: number
    size?: 'sm' | 'md' | 'lg'
    showValue?: boolean
}

export function Rating({ value, size = 'md', showValue = true }: RatingProps) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)

    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    }

    return (
        <div className="flex items-center gap-1">
            {stars.map((star) => (
                <Star
                    key={star}
                    className={`${sizeClasses[size]} ${star <= value
                            ? 'text-[#FF7A00] fill-[#FF7A00]'
                            : star <= Math.ceil(value)
                                ? 'text-[#FF7A00] fill-[#FF7A00] opacity-50'
                                : 'text-gray-300 fill-gray-300'
                        }`}
                />
            ))}
            {showValue && (
                <span className="ml-2 text-2xl font-semibold text-gray-900">
                    {value.toFixed(1)}
                </span>
            )}
        </div>
    )
}

