<script lang="ts">
    import type { CardType }from '../types'
	import Card from './Card.svelte'

    export let cards: CardType[]
    export let hideCards: () => void
</script>

<div class="deck">
    {#each cards as card, index}
        <div class="card">
            <Card
                card={card} 
                isInFront={index === cards.length - 1} 
                hideDiscardButton
                {hideCards}
                on:click 
            />
        </div>
    {/each}
</div>

<style lang="sass">
    @use '../../styles/cards'
    @use '../../styles/colours'

    $card-seperation: 3px
    $card-height: 42vh

    @mixin deck-seperation($i, $card-seperation)
        top: $i * $card-seperation
        right: calc(#{$i} * #{$card-seperation})

    .deck 

        @for $i from 1 through 10
            :nth-child(#{$i}) 
                @include deck-seperation($i, $card-seperation)
                transform: translate(110%, 0)


    .card
        @extend %card-shape
</style>



