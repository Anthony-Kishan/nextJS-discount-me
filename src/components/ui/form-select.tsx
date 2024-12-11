interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: { value: string; label: string }[]
    error?: string
}

export function FormSelect({
    label,
    options,
    error,
    ...props
}: FormSelectProps) {
    return (
        <div className="space-y-1">
            <label className="text-sm text-gray-700">{label}</label>
            <select
                className={`w-full px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent`}
                {...props}
            >
                <option value="">Select</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

