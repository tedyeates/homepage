<script lang='ts'>
	import Deck from "$lib/deck/components/Deck.svelte"
	import Hand from "$lib/deck/components/Hand.svelte"
	import type { ExpandEventDataType, ExpandEventType } from "$lib/deck/types";

    import DeckUtil from "$lib/deck/util/deck"
    import HandUtil from "$lib/deck/util/hand"

    const deck = new DeckUtil()
    const hand = new HandUtil()

    deck.shuffle()
    let cardsInDeck = deck.getDeck()
    let cardsInHand = hand.getHand()

    const reloadCards = () => {
        cardsInDeck = deck.getDeck()
        cardsInHand = hand.getHand()
    }

    const drawCard = () => {
        const card = deck.drawCard()
        if (!card) throw new Error("Deck is empty")

        hand.addCard(card)
        reloadCards()
    }

    let expandCardIndex = -1
    const hideCards = () => {
        console.log("hiding")
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
        console.log(expandCardIndex)
    }
</script>

<svelte:window on:click={hideCards} />

<svelte:head>
	<title>Ted Yeates</title>
	<meta name="description" content="Ted Yeates Project Portfolio" />
</svelte:head>

<article class:card-expanded={expandCardIndex > -1}>
    <section>
        <Deck
            {hideCards}
            on:click={drawCard}
            cards={cardsInDeck}
        />
        <Hand 
            {hideCards}
            cards={cardsInHand}
            {expandCardIndex}
            on:expand={handleExpand}
        />
    </section>
</article>

<style lang="sass">
        
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

    .card-expanded
        cursor: pointer
</style>
