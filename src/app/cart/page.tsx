'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CartItem } from '@/components/cart/cart-item'
import { CartSummary } from '@/components/cart/cart-summary'
import type { CartItem as CartItemType, PaymentMethod } from '@/types/cart'

const initialItems: CartItemType[] = [
    {
        id: '1',
        name: 'Freezer',
        price: 14.00,
        quantity: 5,
        image: '/products/freezer.jpg',
    },
    {
        id: '2',
        name: 'TV',
        price: 14.00,
        quantity: 1,
        image: '/products/tv.jpg',
    },
]

const paymentMethods: PaymentMethod[] = [
    { id: 'cod', name: 'Cash on Delivery' },
    { id: 'paypal', name: 'PayPal' },
]

export default function CartPage() {
    const [items, setItems] = useState<CartItemType[]>(initialItems)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod')

    const updateQuantity = (id: string, quantity: number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity } : item
        ))
    }

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id))
    }

    const calculateTotals = () => {
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        return {
            subtotal,
            shipping: 'Free',
            total: subtotal,
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Cart', href: '/cart' },
                    ]}
                />

                <h1 className="text-3xl font-bold mt-8 mb-6">My Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg border border-gray-200">
                            {/* Header */}
                            <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm text-gray-600">
                                <div className="col-span-6 md:col-span-4">PRODUCT</div>
                                <div className="col-span-6 md:col-span-2 text-right md:text-left">PRICE</div>
                                <div className="col-span-6 md:col-span-3">QUANTITY</div>
                                <div className="col-span-5 md:col-span-2 text-right">SUBTOTAL</div>
                                <div className="col-span-1"></div>
                            </div>

                            {/* Cart Items */}
                            <div className="divide-y divide-gray-200">
                                {items.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={updateQuantity}
                                        onRemove={removeItem}
                                    />
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="p-4 border-t border-gray-200 flex justify-between">
                                <Link
                                    href="/shop"
                                    className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Return to shop
                                </Link>
                                <button
                                    onClick={() => console.log('Update cart')}
                                    className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Update Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <CartSummary
                            totals={calculateTotals()}
                            paymentMethods={paymentMethods}
                            selectedPaymentMethod={selectedPaymentMethod}
                            onPaymentMethodChange={setSelectedPaymentMethod}
                            onCheckout={() => window.location.href = '/checkout/billing'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

