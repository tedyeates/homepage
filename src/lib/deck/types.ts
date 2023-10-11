export type CardType = {
    title: string
    link?: string
    linkText?: string
    technologyTags?: (TechnologyTagType | undefined)[] 
    summary: string
    description: string
    image?: string
    imageAlt?: string
    faceDown?: boolean
    hasContactIcons?: boolean
}

export type ExpandEventDataType = {
    index: number
    event: MouseEvent
}

export type ExpandEventType = {
    expand: ExpandEventDataType
}

export type DiscardEventDataType = {
    cardTitle: string
}

export type DiscardEventType = {
    discard: DiscardEventDataType
}

export type TechnologyTagType = {
    name: string,
    icon?: string,
    iconAlt?: string
}