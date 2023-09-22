export type CardType = {
    title: string
    link?: string
    linkText?: string
    technologyTags?: TechnologyTagType[] 
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

export type TechnologyTagsType = {
    [key: string]: TechnologyTagType
}

export type TechnologyTagType = {
    name: string,
    icon?: string,
    iconAlt?: string
}