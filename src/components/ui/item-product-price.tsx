interface PriceProps {
    amount: number
    className?: string
}

export function Price({ amount, className = "" }: PriceProps) {
    return (
        <span className={`text-xl font-bold ${className}`}>
            ${amount.toFixed(1)}
        </span>
    )
}

