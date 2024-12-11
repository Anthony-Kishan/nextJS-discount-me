export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

export interface CartTotals {
    subtotal: number
    shipping: number | 'Free' | string;
    total: number
}

export interface BillingDetails {
    firstName: string
    lastName: string
    companyName?: string
    streetAddress: string
    country: string
    state: string
    email: string
    phone: string
}

export interface PaymentMethod {
    id: string
    name: string
    icon?: string
}

