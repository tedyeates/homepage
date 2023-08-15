export type CardType = {
    title: string
    link?: string
    linkText?: string
    technologyTags?: string[] 
    summary: string
    description: string
    image?: string
    imageAlt?: string
    faceDown?: boolean
    hasContactIcons?: boolean
}

export type HandCardsType = {
    [key: string]: CardType
}