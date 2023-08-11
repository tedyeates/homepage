<script lang="ts">
    import type { CardType }from '../types'
	import Card from './Card.svelte'

    export let cards: CardType[]
</script>

<div class="deck">
    {#each cards as card, index}
        <div class="card">
            <Card
                card={card} 
                isInFront={index === cards.length - 1} 
                faceDown 
                on:click 
            />
        </div>
    {/each}
</div>

<style lang="sass">
    @use '../../styles/cards'
    @use '../../styles/colours'

    .deck
        position: relative
        display: flex
        height: cards.$height + 5rem + cards.$border-size * 2
        width: cards.$width + 1rem + cards.$border-size * 2

        @for $i from 1 through cards.$deck-size
            :nth-child(#{$i}) 
                top: $i * 0.277778rem
                right: $i * 0.125rem

        .card
            position: absolute
            box-shadow: 0 0 30px transparentize(black, 0.8)
            
</style>



