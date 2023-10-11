import type { CardType } from '../types'
import { pages } from './projects'

export default class {
    private _hand: Map<string, CardType> = new Map()

    constructor() {
        this._hand = pages
    }
    
    addCard(card: CardType) {
        this._hand.set(card.title, card)
    }

    getHand() {
        return [...this._hand.values()]
    }
    
    getCard(cardTitle: string) {
        let card: CardType | null = null
        if (this._hand.has(cardTitle)) {
            card = this._hand.get(cardTitle) ?? null
            this._hand.delete(cardTitle)
        }
        
        return card
    }
}