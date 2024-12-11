'use client'

import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SetNewPasswordPage() {
    return (
        <main>
            <Breadcrumb
                items={[
                    { label: 'Sign In', href: '#' },
                ]}
            />
            <div className="flex items-center justify-center px-4 my-6">
                <div className="w-full max-w-md space-y-8">
                    <form className="space-y-6 p-6 rounded-lg shadow-lg">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Set New Password</h1>
                        </div>
                        <div>
                            <Input
                                type="password"
                                placeholder="Enter new password"
                            />
                        </div>
                        <div>
                            <Input
                                type="password"
                                placeholder="Confirm new password"
                            />
                        </div>

                        <Link href="/set-new-password" className='w-full rounded-full '>
                            <Button type='submit' className='w-full rounded-full mt-4'>
                                Create Account
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
        </main>

    )
}