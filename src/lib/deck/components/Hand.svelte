<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import type { CardType, ExpandEventType }from '../types'
    import Card from './Card.svelte'

    export let cards: CardType[]
    export let expandCardIndex: number
    export let hideCards: () => void

    let cardHoverIndex: number | null = null

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
            class:expanded={expandCardIndex === index}
            class:has-expanded={expandCardIndex > -1}
            style="--rotation:{`${getRotation(50,index)}deg`};}"
        >
        {#if expandCardIndex === index}
            <Card 
                {card}
                {hideCards}
                hasExpanded
                on:click={(event) => onClickCard(index, event)}
            />
        {:else if expandCardIndex === -1}
            <Card
                {card}
                {hideCards}
                on:click={(event) => onClickCard(index, event)}
            />
        {/if}
        </button>
    {/each}
</div>

<style lang="sass">
    @use '../../styles/cards'

    .hand
        height: 100%
        width: 100%
        display: flex
        align-items: center

        .card
            @extend %remove-button-styling
            @extend %card-shape
            transition: transform cards.$transition-speed ease-out
            transform: translate(-50%, 0) rotate(var(--rotation))
            transform-origin: center 140%
            height: 42vh
            aspect-ratio: 1/1.5
            left: 50%
            top: 50%

            &.expanded
                position: absolute
                top: unset
                z-index: 1
                width: 100%
                height: 100%

                @media only screen and (min-width: 768px)
                    height: 95vh
                    width: unset

            &.has-expanded
                box-shadow: none

</style>