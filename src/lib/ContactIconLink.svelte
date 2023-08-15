<script lang="ts">
    import colorPalette from '$lib/constants/colour-palette';

    export let invertColors: boolean = false
    export let link: string
    export let label: string | undefined = undefined
    export let size: number
    export let hasExpanded: boolean = false

    let isHovering: boolean = false
    
    $: getColor = () => {
        if (isHovering) {
            return colorPalette.cardTextHighlight
        }

        if (!invertColors && isHovering) {
            return colorPalette.highlight
        }

        if (invertColors && !isHovering) {
            return colorPalette.highlight
        }

        return colorPalette.images
    }

    const onHover = () => {
        isHovering = true
    }

    const onHoverOut = () => {
        isHovering = false
    }
</script>

<a 
    on:mouseover={onHover}
    on:focus={onHover}
    on:mouseout={onHoverOut}
    on:blur={onHoverOut}
    href={link}
    target="_blank"
    aria-label={label ?? "Contact Link"}
    style="--size:{size}; --color:{getColor()};"
>
    <slot id={label} color={getColor()} {size} />
    {#if label}
    <label 
        for={label} 
        class:card-expanded={hasExpanded} 
        class="card-link"
    >
        {label}
    </label>
    {/if}
</a>

<style lang="sass">
    @use './styles/colours'
    @use './styles/cards'

    a
        display: inline-flex
        height: var(--size)
        align-items: center
        width: fit-content

    label
        color: var(--color)
        padding: .3rem
        cursor: pointer
        
        &:hover
            text-decoration: none
        
        
        &.card-expanded
            font-size: 2rem
</style>
