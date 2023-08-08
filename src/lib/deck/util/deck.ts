import { projects } from './projects'
import type { CardType } from '../types'

export default class {
    private _deck: CardType[] = []

    constructor() {
        this._deck = projects
    }

    getDeck() {
        return this._deck
    }
    
    addCard(card: CardType) {
        this._deck.push(card)
    }
    
    drawCard() {
        return this._deck.pop()
    }
    
    shuffle() {
        for (let cardIndex = 0; cardIndex < this._deck.length; cardIndex++) {
            const swapCardIndex = Math.floor(Math.random() * this._deck.length)
            const tempCard = this._deck[cardIndex]
            this._deck[cardIndex] = this._deck[swapCardIndex]
            this._deck[swapCardIndex] = tempCard
        }
    }

}