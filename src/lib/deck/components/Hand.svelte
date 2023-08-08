<script lang="ts">
    import type { CardType, Point }from '../types'
    import Card from './Card.svelte'

    export let cards: CardType[]

    let cardHoverIndex: number | null = null

    $: getRotation = (angle: number, index: number) => {
        let proportionAngle = angle/(cards.length + 1)
        let rotation = -angle/4 + proportionAngle * index    
        if (cardHoverIndex === null || index === cardHoverIndex) {
            return rotation
        } 

        if (index < cardHoverIndex) {
            return rotation - proportionAngle * 2
        }

        return rotation + proportionAngle * 2
    }

    const onFocus = (index: number) => {
        cardHoverIndex = index
    }

    const onBlur = () => {
        cardHoverIndex = null
    }

    const flipCard = (index: number) => {
        cards = [
            ...cards.slice(0, index),
            {...cards[index], faceDown: !cards[index].faceDown},
            ...cards.slice(index+1)
        ]
    }

</script>

<div class="hand">
    {#each cards as card, index}
        <button 
            on:mouseover={() => onFocus(index)}
            on:focus={() => onFocus(index)}
            on:mouseout={() => onBlur()}
            on:blur={() => onBlur()}
            class="card" 
            style="--rotation:{`${getRotation(50,index)}deg`};}"
        >
            <Card 
                card={card} 
                faceDown={cards[index].faceDown} 
                on:click={() => flipCard(index)}    
            />
        </button>
    {/each}
</div>

<style lang="sass">
    @use '../../styles/cards'
    
    .hand
        position: relative
        height: cards.$height + 5rem + cards.$border-size * 2
        width: cards.$width + cards.$border-size * 2

        .card
            all: unset
            border: 0
            position: absolute
            box-shadow: 0 0 30px transparentize(black, 0.8)

            transition: transform .5s ease-out
            transform: translate(-50%, -50%) rotate(var(--rotation))
            transform-origin: center 120%
            left: 50%
            top: 50%

</style>