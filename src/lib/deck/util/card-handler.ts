import DeckUtil from "$lib/deck/util/deck"
import HandUtil from "$lib/deck/util/hand"
import { projects } from "./projects"

let deck: DeckUtil
let hand: HandUtil
let discard: DeckUtil

export const onLoad = () => {
    deck = new DeckUtil()
    discard = new DeckUtil()
    hand = new HandUtil()

    deck.fillDeck(projects)
    deck.shuffle()
    return [deck.getDeck(), hand.getHand(), discard.getDeck()]
}


export const drawCard = () => {
    const card = deck.drawCard()
    if (!card) throw new Error("Deck is empty")

    hand.addCard(card)
    return [deck.getDeck(), hand.getHand()]
}

export const discardCard = (cardTitle: string) => {
    const card = hand.getCard(cardTitle)
    if (!card) throw new Error(`Card with title ${cardTitle} does not exist`)

    discard.addCard(card)
    return [hand.getHand(), discard.getDeck()]
}

export const shuffleInDiscard = () => {
    const cards = discard.emptyDeck()
    deck.fillDeck(cards)
    deck.shuffle()
    return [deck.getDeck(), discard.getDeck()]
}

