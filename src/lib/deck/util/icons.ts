export const getIconSize = (
    innerWidth: number, 
    innerHeight: number, 
    baseSize: number
) => {
    if (innerWidth > innerHeight) {
        return {iconWidth: baseSize, iconHeight: baseSize * 2}
    }

    return {iconWidth: baseSize * 4, iconHeight: baseSize * 2}
}