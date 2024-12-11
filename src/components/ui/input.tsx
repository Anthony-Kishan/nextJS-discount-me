"use client";
import React, { useState } from 'react'
import { Search, Eye, EyeOff } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: 'search' | 'password'
}

export function Input({ type = "text", icon, className = "", ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    const togglePassword = () => {
        setShowPassword(!showPassword)
        setInputType(showPassword ? 'password' : 'text')
    }

    return (
        <div className="relative">
            {icon === 'search' && (
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            )}
            <input
                type={inputType}
                className={`w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent
          ${icon === 'search' ? 'pl-10' : ''} ${className}`}
                {...props}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            )}
        </div>
    )
}

