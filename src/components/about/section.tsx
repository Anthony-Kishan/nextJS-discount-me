import { ArrowRight } from 'lucide-react'
import { ServiceSection } from '@/types/about'

interface SectionProps {
    section: ServiceSection
}

export function Section({ section }: SectionProps) {
    return (
        <div className="space-y-6">
            <h2 className="flex items-center gap-4 text-3xl font-bold text-gray-900">
                <ArrowRight className="h-6 w-6 flex-shrink-0" />
                {section.title}
            </h2>
            <div className="space-y-4 text-gray-600">
                {section.items.map((item, index) => (
                    <p key={item.id} className="leading-relaxed">
                        {String.fromCharCode(97 + index)}. {item.content}
                    </p>
                ))}
            </div>
        </div>
    )
}

