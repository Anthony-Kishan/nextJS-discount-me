import type { CartTotals, PaymentMethod } from '@/types/cart'

interface CartSummaryProps {
    totals: CartTotals
    paymentMethods: PaymentMethod[]
    selectedPaymentMethod: string
    onPaymentMethodChange: (method: string) => void
    onCheckout: () => void
}

export function CartSummary({
    totals,
    paymentMethods,
    selectedPaymentMethod,
    onPaymentMethodChange,
    onCheckout
}: CartSummaryProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${totals.subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium text-green-600">
                        {typeof totals.shipping === 'number'
                            ? `$${totals.shipping.toFixed(2)}`
                            : totals.shipping}
                    </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-gray-200">
                    <span className="text-gray-900 font-medium">Total:</span>
                    <span className="font-semibold">${totals.total.toFixed(2)}</span>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold mb-2">Payment Method</h3>
                <div className="space-y-2">
                    {paymentMethods.map((method) => (
                        <label key={method.id} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value={method.id}
                                checked={selectedPaymentMethod === method.id}
                                onChange={() => onPaymentMethodChange(method.id)}
                                className="text-[#FF7A00] focus:ring-[#FF7A00]"
                            />
                            <span>{method.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                onClick={onCheckout}
                className="w-full mt-6 bg-[#FF7A00] text-white py-3 rounded-full hover:bg-[#FF7A00]/90 transition-colors"
            >
                Proceed to checkout
            </button>
        </div>
    )
}

