<script lang="ts">
	import type { TechnologyTagType } from "../types";

    export let technologies: (TechnologyTagType | undefined)[]
    export let hasExpanded: boolean = false

    let displayTechnologies = [...technologies.values()]

    $: if (!hasExpanded) {
        displayTechnologies = technologies.slice(0, 3)
    } else {
        displayTechnologies = technologies
    }
</script>

<div class:card-expanded={hasExpanded} class="tags">
{#each displayTechnologies as technology}
    {#if technology}
    <div class="tag">
        {#if "icon" in technology}
        <img src={technology.icon} alt={technology.iconAlt}/>
        {/if}
        {#if hasExpanded || !("icon" in technology)}
        <span>{technology.name}</span>
        {/if}
    </div>
    {/if}
{/each}
{#if technologies.length > 3 && !hasExpanded}
    <div class="tag">
        ...
    </div>
{/if}
</div> 

<style lang="sass">
    @use "../../styles/colours"
    @use "../../styles/cards"
    @use "sass:math"

    .tag
        color: colours.$text
        background-color: colours.$detail
        align-items: center
        justify-content: center
        height: 1.7rem
        padding: .1rem .6rem
        border-radius: 20px
        gap: .2rem

        img
            height: 65%
            border-radius: 20px

    .tags
        flex-wrap: wrap
        gap: .1rem
        margin: .1rem 0

        &.card-expanded
            gap: .1rem

            .tag
                height: 3vh

                @media only screen and (min-width: 768px)
                    font-size: cards.$expanded-font-size


    div
        display: flex
        gap: .1rem
        font-size: .7rem
        
        &.card-expanded
            padding: math.div(cards.$padding, 1.3)
            padding: .1rem .6rem

            @media only screen and (min-width: 768px)
                font-size: 10rem
</style>