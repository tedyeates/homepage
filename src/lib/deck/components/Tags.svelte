<script lang="ts">
	import type { TechnologyTagType } from "../types";

    export let technologies: TechnologyTagType[]
    export let hasExpanded: boolean = false
</script>

<div class:card-expanded={hasExpanded} class="tags">
{#each technologies as technology}
    <div class="tag">
        {#if "icon" in technology}
        <img src={technology.icon} alt={technology.iconAlt}/>
        {/if}
        {#if hasExpanded || !("icon" in technology)}
        <span>{technology.name}</span>
        {/if}
    </div>
{/each}
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
        margin: .3rem 0

        &.card-expanded
            gap: .4rem

            .tag
                height: 2rem

    div
        display: flex
        gap: .1rem
        font-size: .8rem
        
        &.card-expanded
            font-size: cards.$expanded-font-size
            padding: math.div(cards.$padding, 1.3)
            padding: .1rem .6rem
</style>