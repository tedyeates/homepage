<script>
	import Deck from "$lib/deck/components/Deck.svelte"
	import Hand from "$lib/deck/components/Hand.svelte"

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
</script>

<svelte:head>
	<title>Teddy</title>
	<meta name="description" content="Ted Yeates Project Portfolio" />
</svelte:head>

<article>
    <section>
        <Deck 
            on:click={drawCard}
            cards={cardsInDeck}
        />
    </section>
    <section>
        <Hand 
            cards={cardsInHand}
        />
    </section>
</article>

<style lang="sass">
    section
        display: flex
        align-items: center
        justify-content: center
</style>
