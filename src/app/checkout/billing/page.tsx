'use client'

import Image from 'next/image';
import { useState } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { BillingForm } from '@/components/checkout/billing-form'
import { CartSummary } from '@/components/cart/cart-summary'
import type { BillingDetails, CartItem, PaymentMethod } from '@/types/cart'

const mockCartItems: CartItem[] = [
    {
        id: '1',
        name: 'Freezer',
        price: 14.00,
        quantity: 1,
        image: '/products/freezer.jpg',
    },
]

const paymentMethods: PaymentMethod[] = [
    { id: 'cod', name: 'Cash on Delivery' },
    { id: 'paypal', name: 'PayPal' },
]

export default function BillingPage() {
    const [billingDetails, setBillingDetails] = useState<BillingDetails>({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        country: '',
        state: '',
        email: '',
        phone: '',
    })

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod')
    const [isModalOpen, setIsModalOpen] = useState(false) // Modal state for success message
    //const [setIsFormValid] = useState(true) // State to track form validation

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setBillingDetails((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const calculateTotals = () => {
        const subtotal = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        return {
            subtotal,
            shipping: 'Free',
            total: subtotal,
        }
    }

    const validateForm = () => {
        // Check if any of the fields are empty
        const isValid = Object.values(billingDetails).every(value => value !== '')
        //setIsFormValid(isValid) // Set form validity
        return isValid
    }

    const handlePlaceOrder = () => {
        if (!validateForm()) {
            alert('Please fill all the fields before placing the order.')
            return
        }

        // Implement order placement logic
        console.log('Order placed:', {
            billingDetails,
            paymentMethod: selectedPaymentMethod,
            items: mockCartItems,
        })

        // Open the success modal
        setIsModalOpen(true)

        // Close the modal after 3 seconds
        setTimeout(() => {
            setIsModalOpen(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <Breadcrumb
                    items={[
                        { label: 'Cart', href: '/cart' },
                        { label: 'Billing', href: '/checkout/billing' },
                    ]}
                />

                <h1 className="text-3xl font-bold mt-8 mb-6">Billing Information</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <BillingForm
                            billingDetails={billingDetails}
                            onInputChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <CartSummary
                            totals={calculateTotals()}
                            paymentMethods={paymentMethods}
                            selectedPaymentMethod={selectedPaymentMethod}
                            onPaymentMethodChange={setSelectedPaymentMethod}
                            onCheckout={handlePlaceOrder}
                        />
                    </div>
                </div>
            </div>

            {/* Modal: Success Message */}
            {isModalOpen && (
                // <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                //     <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                //         <h2 className="text-2xl font-bold text-center">Order Placed Successfully!</h2>
                //         <p className="mt-4 text-center">Your order has been successfully placed. Thank you for shopping with us!</p>
                //         <div className="mt-6 text-center">
                //             <button
                //                 onClick={() => setIsModalOpen(false)}
                //                 className="bg-[#FF7A00] text-white px-6 py-2 rounded-full hover:bg-[#FF7A00]/90 transition-colors"
                //             >
                //                 Close
                //             </button>
                //         </div>
                //     </div>
                // </div>


                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &#x2715;
                        </button>

                        {/* Success Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-green-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Title and Message */}
                        <h2 className="text-xl font-semibold text-center mb-2">Order Successfully</h2>
                        <p className="text-gray-600 text-center mb-6">
                            If you want to track your order, please install our app from Play Store or App Store.
                        </p>

                        {/* QR Code and Download Buttons */}
                        <div className="text-center flex justify-around my-0 mx-auto">
                            {/* QR Code */}
                            <div className="mb-4">
                                {/* <QRCode value="https://yourapp.link" size={100} /> */}
                                <Image
                                    src="/qr-code.png"
                                    alt="google-play-badge"
                                    width={100}
                                    height={100}
                                />
                            </div>

                            {/* App Store Buttons */}
                            <div className="grid gap-y-px">
                                <a
                                    href="https://play.google.com/store/apps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/google-play-badge.svg"
                                        alt="google-play-badge"
                                        width={150}
                                        height={70}
                                    />
                                </a>
                                <a
                                    href="https://www.apple.com/app-store/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/app-store-badge.svg"
                                        alt="App Store"
                                        width={150}
                                        height={70}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
