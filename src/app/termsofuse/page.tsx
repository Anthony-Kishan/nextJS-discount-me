import { Section } from '@/components/about/section'
import type { PrivacyPolicyContent } from '@/types/about'
import { Breadcrumb } from '@/components/ui/breadcrumb'

function getTermsOfUseContent(companyName: string): PrivacyPolicyContent {
    return {
        companyName,
        introduction: `Welcome to ${companyName}. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the "Client") and ${companyName} (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.`,
        sections: [
            {
                id: "scope",
                title: "Scope of Service",
                items: [
                    {
                        id: "scope-1",
                        content: `${companyName} will provide custom logo design services to the Client based on the specifications provided by the Client.`
                    },
                    {
                        id: "scope-2",
                        content: "The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee."
                    }
                ]
            },
            {
                id: "copyright",
                title: "Copyright and Ownership",
                items: [
                    {
                        id: "copyright-1",
                        content: "The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider."
                    },
                    {
                        id: "copyright-2",
                        content: "Final payment ensures that only the agreed design becomes the client's property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made."
                    },
                    {
                        id: "copyright-3",
                        content: "The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials."
                    }
                ]
            }
        ]
    }
}

export default function TermsOfUsePage() {
    const aboutContent = getTermsOfUseContent("LogoMaster")

    return (
        <div className="min-h-screen bg-white">
            <Breadcrumb
                items={[
                    { label: 'Terms Of Use', href: '#' },
                ]}
            />
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-4xl space-y-12">
                    {/* Main Title */}
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        Terms Of Use
                    </h1>

                    {/* Introduction */}
                    <p className="text-lg leading-relaxed text-gray-600">
                        {aboutContent.introduction}
                    </p>

                    {/* Sections */}
                    <div className="space-y-12">
                        {aboutContent.sections.map((section) => (
                            <Section key={section.id} section={section} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

