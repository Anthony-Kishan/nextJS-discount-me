interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    optional?: boolean
}

export function FormInput({
    label,
    error,
    optional = false,
    ...props
}: FormInputProps) {
    return (
        <div className="space-y-1">
            <label className="text-sm text-gray-700">
                {label}
                {optional && <span className="text-gray-400 ml-1">(optional)</span>}
            </label>
            <input
                className={`w-full px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent`}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

