import { Minus, Plus } from 'lucide-react'

interface QuantityControlProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export function QuantityControl({ quantity, onIncrease, onDecrease }: QuantityControlProps) {
    return (
        <div className="flex items-center rounded-full border border-gray-200">
            <button
                onClick={onDecrease}
                className="p-2 hover:text-[#FF7A00] disabled:opacity-50"
                disabled={quantity <= 1}
            >
                <Minus className="h-4 w-4" />
            </button>
            <input
                type="text"
                value={quantity}
                className="w-12 border-x border-gray-200 py-2 text-center"
                readOnly
            />
            <button
                onClick={onIncrease}
                className="p-2 hover:text-[#FF7A00]"
            >
                <Plus className="h-4 w-4" />
            </button>
        </div>
    )
}

