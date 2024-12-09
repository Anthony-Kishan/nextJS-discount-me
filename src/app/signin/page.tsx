'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import { Breadcrumb } from '@/components/breadcrumb'

export default function SignInPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <div
            className=" flex flex-col bg-cover bg-center bg-no-repeat"
        >
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
                    <h1 className="text-3xl font-semibold text-center mb-8">
                        Sign In
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-[#FF7A00] focus:ring-[#FF7A00]"
                                    checked={formData.rememberMe}
                                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-sm text-gray-600 hover:text-[#FF7A00]"
                            >
                                Forget Password
                            </Link>
                        </div>

                        <Button type="submit" className="rounded-3xl w-full">
                            Login
                        </Button>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                href="/register"
                                className="text-black font-bold hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

