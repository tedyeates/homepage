<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import type { CardType, ExpandEventType }from '../types'
    import Card from './Card.svelte'

    export let cards: CardType[]
    export let expandCardIndex: number

    let cardHoverIndex: number | null = null
    
    const TOP_INITIAL = 50

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
            return rotation - proportionAngle * 4
        }

        return rotation + proportionAngle * 4
    }

    const onFocus = (index: number) => {
        cardHoverIndex = index
    }

    const onBlur = () => {
        cardHoverIndex = null
    }

    $: getTop = (index:number) => {
        if (expandCardIndex === index) {
            return -5
        }

        return TOP_INITIAL
    }

    const dispatch = createEventDispatcher<ExpandEventType>()

    const onClickCard = (index:number, event: MouseEvent) => {
        dispatch('expand', {
            index,
            event
        })
    }

</script>

<div class="hand">
    {#each [...cards].reverse() as card, index}
        <button 
            on:mouseover={() => onFocus(index)}
            on:focus={() => onFocus(index)}
            on:mouseout={() => onBlur()}
            on:blur={() => onBlur()} 
            on:click|stopPropagation
            class="card"
            style="--rotation:{`${getRotation(50,index)}deg`};}; top:{getTop(index)}%;"
        >
        {#if expandCardIndex === index}
            <Card 
                {card}
                hasExpanded
                on:click={(event) => onClickCard(index, event)}
            />
        {:else if expandCardIndex === -1}
            <Card
                {card}
                on:click={(event) => onClickCard(index, event)}
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

            transition: transform cards.$transition-speed ease-out
            transform: translate(-50%, -50%) rotate(var(--rotation))
            transform-origin: center 120%
            left: 50%
</style>