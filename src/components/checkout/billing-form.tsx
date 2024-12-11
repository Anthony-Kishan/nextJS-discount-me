import { FormInput } from '@/components/ui/form-input'
import { FormSelect } from '@/components/ui/form-select'
import type { BillingDetails } from '@/types/cart'

interface BillingFormProps {
    billingDetails: BillingDetails
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function BillingForm({ billingDetails, onInputChange }: BillingFormProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
                label="First name"
                name="firstName"
                value={billingDetails.firstName}
                onChange={onInputChange}
                placeholder="Your first name"
            />
            <FormInput
                label="Last name"
                name="lastName"
                value={billingDetails.lastName}
                onChange={onInputChange}
                placeholder="Your last name"
            />
            <FormInput
                label="Company Name"
                name="companyName"
                value={billingDetails.companyName}
                onChange={onInputChange}
                placeholder="Company name"
                optional
            />
            <FormInput
                label="Street Address"
                name="streetAddress"
                value={billingDetails.streetAddress}
                onChange={onInputChange}
                placeholder="Street address"
            />
            <FormSelect
                label="Country / Region"
                name="country"
                value={billingDetails.country}
                onChange={onInputChange}
                options={[
                    { value: 'us', label: 'United States' },
                    { value: 'uk', label: 'United Kingdom' },
                ]}
            />
            <FormSelect
                label="States"
                name="state"
                value={billingDetails.state}
                onChange={onInputChange}
                options={[
                    { value: 'ny', label: 'New York' },
                    { value: 'ca', label: 'California' },
                ]}
            />
            <FormInput
                label="Email"
                name="email"
                type="email"
                value={billingDetails.email}
                onChange={onInputChange}
                placeholder="Email address"
            />
            <FormInput
                label="Phone"
                name="phone"
                type="tel"
                value={billingDetails.phone}
                onChange={onInputChange}
                placeholder="Phone number"
            />
        </div>
    )
}

