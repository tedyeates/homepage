export type CardType = {
    title: string
    link?: string
    linkText?: string
    technologyTags: string[] 
    summary: string
    description: string
    image?: string
    imageAlt?: string
    faceDown?: boolean
}

export type Point = {
    x: number
    y: number
}