<script lang='ts'>
	import Deck from "$lib/deck/components/Deck.svelte"
	import Discard from "$lib/deck/components/Discard.svelte";
	import Hand from "$lib/deck/components/Hand.svelte"
	import Button from "$lib/deck/components/buttons/Button.svelte";
	import type { DiscardEventDataType, ExpandEventDataType } from "$lib/deck/types";
	import { discardCard, drawCard, onLoad, shuffleInDiscard } from "$lib/deck/util/card-handler";
    import color from '$lib/constants/colour-palette'

    let [cardsInDeck, cardsInHand, cardsInDiscard] = onLoad()

    const onDraw = () => {
        [cardsInDeck, cardsInHand] = drawCard()
    }

    let expandCardIndex = -1
    const onDiscard = (event: CustomEvent<DiscardEventDataType>) => {
        [cardsInHand, cardsInDiscard] = discardCard(event.detail.cardTitle)
        expandCardIndex = -1
    }


    const onShuffle = () => {
        [cardsInDeck, cardsInDiscard] = shuffleInDiscard()
    }


    const hideCards = () => {
        expandCardIndex = -1
    }

    $: handleExpand = (event: CustomEvent<ExpandEventDataType>) => {
        const eventData = event.detail
        const target = eventData.event.target as HTMLElement
        if (target.tagName === "A") {
            event.stopPropagation()
            return
        }

        expandCardIndex = eventData.index
    }


</script>

<svelte:window on:click={hideCards} />

<svelte:head>
	<title>Ted Yeates</title>
	<meta name="description" content="Ted Yeates Project Portfolio" />
</svelte:head>

<article class:card-expanded={expandCardIndex > -1}>
    <section>
        <div>
            <Deck
                {hideCards}
                on:click={onDraw}
                cards={cardsInDeck}
            />
            <Discard
                {hideCards}
                cards={cardsInDiscard}
            />
            {#if cardsInDiscard.length > 0 && expandCardIndex < 0}
            <div class="shuffle">
                <Button 
                    on:click={onShuffle} 
                    iconClass="pepicons-pop:arrow-spin"
                    height={40}
                    backgroundColor={color.detail}
                >
                    Shuffle
                </Button>
        </div>
            {/if}
        </div>
        <Hand 
            {hideCards}
            cards={cardsInHand}
            {expandCardIndex}
            on:expand={handleExpand}
            on:discard={onDiscard}
        />
    </section>
</article>

<style lang="sass">
    @use '../lib/styles/cards'
        
    section
        display: flex
        align-items: center
        justify-content: center
        height: 100%
        width: 100%
        top: 0
        position: absolute

    article
        height: 100%
        position: relative

    div
        @extend %card-storage

    .shuffle
        top: 3px
        right: 3px
        width: auto
        transform: translate(160%, 0)
        justify-content: center
        align-items: center
        display: flex
        @extend %card-shape
        box-shadow: none


        button
            // @extend %remove-button-styling
            right: 0

    .card-expanded
        cursor: pointer
</style>
