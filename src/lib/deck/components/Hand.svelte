<script lang="ts">
    import type { CardType }from '../types'
    import Card from './Card.svelte'

    export let cards: CardType[]

    let cardHoverIndex: number | null = null

    let expandCardIndex = -1
    const TOP_INITIAL = 50
    let top = TOP_INITIAL

    $: getRotation = (angle: number, index: number) => {
        if (expandCardIndex === index) {
            return 0
        }

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

    const showCard = (index: number, event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.tagName === "A") {
            event.stopPropagation()
            return
        }

        console.log(expandCardIndex, index)
        if (expandCardIndex === index) {
            expandCardIndex = -1
            top = TOP_INITIAL
            return;
        }

        expandCardIndex = index
        top = -15
    }

</script>

<div class="hand">
    {#each [...cards].reverse() as card, index}
        <button 
            on:mouseover={() => onFocus(index)}
            on:focus={() => onFocus(index)}
            on:mouseout={() => onBlur()}
            on:blur={() => onBlur()} 
            class="card"
            style="--rotation:{`${getRotation(50,index)}deg`};}; top:{top}%;"
        >
        {#if expandCardIndex === index}
            <Card 
                {card}
                hasExpanded
                on:click={(event) => showCard(index, event)}
            />
        {:else if expandCardIndex === -1}
            <Card
                {card}
                on:click={(event) => showCard(index, event)}
            />
        {/if}
        </button>
    {/each}
</div>

<style lang="sass">
    @use '../../styles/cards'
    
    .hand
        position: relative
        height: cards.$height
        width: cards.$width 

        .card
            all: unset
            border: 0
            position: absolute
            box-shadow: 0 0 30px transparentize(black, 0.8)

            transition: transform .5s ease-out
            transform: translate(-50%, -50%) rotate(var(--rotation))
            transform-origin: center 120%
            left: 50%
</style>