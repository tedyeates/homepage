import type { CardType, HandCardsType } from '../types'
import { pages } from './projects'

export default class {
    private _hand: HandCardsType = {}

    constructor() {
        this._hand = pages
    }
    
    addCard(card: CardType) {
        this._hand[card.title] = card
    }

    getHand() {
        return Object.values(this._hand)
    }
    
    getCard(cardTitle: string) {
        let card: CardType | null = null
        if (cardTitle in this._hand) {
            card = this._hand[cardTitle]
            delete this._hand[cardTitle]
        }
        
        return card
    }
}