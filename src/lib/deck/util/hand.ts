import type { CardType } from '../types'

export default class {
    private _hand: {
        [key: string]: CardType
    } = {}
    
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