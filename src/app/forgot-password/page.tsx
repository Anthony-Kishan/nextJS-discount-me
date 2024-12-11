'use client'

import { useState } from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { validateEmail, validatePassword } from '@/lib/utils'

interface FormData {
    email: string
    password: string
    confirmPassword: string
    acceptTerms: boolean
}

interface FormErrors {
    email?: string
    password?: string
    confirmPassword?: string
    acceptTerms?: string
}

export default function ForgotPasswordPage() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters'
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms and conditions'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsLoading(true)
        try {
            // Here you would typically make an API call to create the account
            await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
            console.log('Account created:', formData)
            // Redirect or show success message
        } catch (error) {
            console.error('Error creating account:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            // Implement Google Sign In logic
            console.log('Google Sign In clicked')
        } catch (error) {
            console.error('Error signing in with Google:', error)
        }
    }

    return (
        <main>
            <Breadcrumb
                items={[
                    { label: 'Sign In', href: '#' },
                ]}
            />
            <div className="flex items-center justify-center px-4 my-6">
                <div className="w-full max-w-md space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg shadow-lg">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Create Account</h1>
                        </div>
                        <div>
                            <Input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            // error={errors.email}
                            />
                        </div>

                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                // showpasswordtoggle="true"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            // error={errors.password}
                            />
                        </div>

                        <div>
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                // showpasswordtoggle="true"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            // error={errors.confirmPassword}
                            />
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    checked={formData.acceptTerms}
                                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                    className="h-4 w-4 rounded border-gray-300 text-[#FF7A00] focus:ring-[#FF7A00]"
                                />
                            </div>
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                                Accept all terms & Conditions
                            </label>
                        </div>
                        {errors.acceptTerms && (
                            <p className="text-sm text-red-500 mt-1">{errors.acceptTerms}</p>
                        )}

                        <Button type="submit" className='w-full rounded-full'>
                            Create Account
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 text-gray-500">or</span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center gap-3 w-full border-gray-300"
                        >
                            <Image
                                src="/google.svg"
                                alt="Google logo"
                                width={20}
                                height={20}
                            />
                            Continue with Google
                        </Button>
                    </form>
                </div>
            </div>
        </main>

    )
}