<script lang="ts">
    import { projects, pages } from '$lib/deck/util/projects'
    import Card from '$lib/deck/components/Card.svelte'


    let expandCardIndex = -1
    const hideCards = () => {
        expandCardIndex = -1
    }

    $: handleExpand = (index: number, event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.tagName === "A") {
            event.stopPropagation()
            return
        }

        expandCardIndex = index
    }
</script>

<div class="deck">
    {#each projects as card, index}
        <div 
            class="card"
            class:expanded={expandCardIndex === index}
        >
            {#if expandCardIndex === index || expandCardIndex === -1}
            <Card 
                {card}
                {hideCards}
                hasExpanded={expandCardIndex === index}
                hideDiscardButton
                on:click={(event) => handleExpand(index, event)}
            />
            {/if}
        </div>
    {/each}
</div>

<style lang="sass">
    @use '../../lib/styles/cards'

    $card-seperation: 30vh
    $card-height: 42vh

    @mixin deck-seperation($i, $card-seperation)
        

    .deck 
        @extend %card-storage
        display: flex
        gap: 4vh 1vw
        margin: 0 4vw
        width: 90%
        flex-wrap: wrap
        justify-content: center


        @for $i from 1 through 10
            :nth-child(#{$i}) 
                @include deck-seperation($i, $card-seperation)

    .card
        @extend %card-shape
        box-shadow: none
        position: relative
        display: inline-flex

        &.expanded
            @extend %expanded-card
</style>