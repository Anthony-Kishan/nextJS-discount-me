export interface ServiceSection {
    id: string
    title: string
    items: {
        id: string
        content: string
    }[]
}

export interface AboutContent {
    companyName: string
    introduction: string
    sections: ServiceSection[]
}

export interface PrivacyPolicyContent {
    companyName: string
    introduction: string
    sections: ServiceSection[]
}

