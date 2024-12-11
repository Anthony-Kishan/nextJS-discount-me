import Link from 'next/link'

interface SectionHeaderProps {
    title: string
    showEmoji?: boolean
    actionHref?: string
    actionLabel?: string
}

export function SectionHeader({
    title,
    showEmoji = false,
    actionHref,
    actionLabel = 'See all'
}: SectionHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                {title}
                {showEmoji && <span className="animate-pulse">🔥</span>}
            </h2>
            {actionHref && (
                <Link
                    href={actionHref}
                    className="px-6 py-2 rounded-full bg-[#E8F5E9] text-[#00A651] hover:bg-[#00A651]/10 transition-colors duration-200"
                >
                    {actionLabel}
                </Link>
            )}
        </div>
    )
}

