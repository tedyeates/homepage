export const getIconSize = (
    innerWidth: number, 
    innerHeight: number, 
    baseSize: number
) => {
    console.log(innerWidth, innerHeight)
    if (innerWidth > innerHeight) {
        return {width: baseSize, height: baseSize * 2}
    }

    return {width: baseSize * 4, height: baseSize * 2}
}