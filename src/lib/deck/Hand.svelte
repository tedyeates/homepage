<script lang="ts">
    import type { CardType }from './types'
    import Card from './Card.svelte'

    export let cards: CardType[]
</script>

<div class="hand">
    {#each cards as card, index}
        <div class="card">
            <Card card={card} />
        </div>
    {/each}
</div>

<style lang="sass">
    @use '../styles/cards'
    .hand
        position: relative
        height: cards.$height + cards.$border-size * 2
        width: cards.$width + cards.$border-size * 2

        @include cards.fan(3, 50deg)

        &:hover
            @include cards.fan(3, 100deg)

        .card
            position: absolute
            box-shadow: 0 0 30px transparentize(black, 0.8)
            transform-origin: center 120%
            transition: transform .3s ease-out
            
            left: 50%
            top: 50%
</style>