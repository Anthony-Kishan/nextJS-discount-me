export default function Loading() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-4xl space-y-12">
                    {/* Title Skeleton */}
                    <div className="h-12 w-48 animate-pulse rounded-lg bg-gray-200" />

                    {/* Introduction Skeleton */}
                    <div className="space-y-3">
                        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200" />
                    </div>

                    {/* Sections Skeleton */}
                    {[1, 2].map((section) => (
                        <div key={section} className="space-y-6">
                            <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200" />
                            <div className="space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div
                                        key={item}
                                        className="h-4 w-full animate-pulse rounded bg-gray-200"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

