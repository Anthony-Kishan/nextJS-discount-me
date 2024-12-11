import Image from 'next/image'
import { Rating } from '@/components/ui/rating'
import type { Review } from '@/types/item-product'

interface ReviewCardProps {
    review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="py-6 border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Image
                        src={review.userImage}
                        alt={review.userName}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h4 className="font-medium">{review.userName}</h4>
                        <Rating value={review.rating} size="sm" />
                    </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
        </div>
    )
}

