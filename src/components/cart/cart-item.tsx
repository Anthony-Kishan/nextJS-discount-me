import Image from 'next/image'
import { X } from 'lucide-react'
import { QuantityControl } from '@/components/cart/quantity-control'
import type { CartItem as CartItemType } from '@/types/cart'

interface CartItemProps {
    item: CartItemType
    onUpdateQuantity: (id: string, quantity: number) => void
    onRemove: (id: string) => void
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="grid grid-cols-12 gap-4 py-4 px-4 items-center">
            <div className="col-span-6 md:col-span-4 flex items-center gap-4">
                <div className="relative w-20 h-20">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <span className="font-medium">{item.name}</span>
            </div>

            <div className="col-span-6 md:col-span-2 text-right md:text-left">
                ${item.price.toFixed(2)}
            </div>

            <div className="col-span-6 md:col-span-3">
                <QuantityControl
                    quantity={item.quantity}
                    onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
                />
            </div>

            <div className="col-span-5 md:col-span-2 text-right">
                ${(item.price * item.quantity).toFixed(2)}
            </div>

            <div className="col-span-1 text-right">
                <button
                    onClick={() => onRemove(item.id)}
                    className="py-2  hover:text-red-500"
                >
                    <X className="h-5 w-5 mr-2" />
                </button>
            </div>
        </div>
    )
}

