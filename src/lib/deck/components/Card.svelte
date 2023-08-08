<script lang="ts">
    import cardImage from '$lib/images/BearCardScaled.png'
	import type { CardType } from '../types';

    export let faceDown:boolean|undefined
    export let shown:boolean = true
    export let card:CardType

    let ariaLabel = "Project Card Front"
    if (faceDown) ariaLabel = "Project Card Back"
</script>

<div class="outline">
    <svelte:element 
        this={shown ? "button" : "div"} 
        class:shown
        class:faceUp={!faceDown}
        class:faceDown
        class="background" 
        aria-label={ariaLabel} 
        role={shown ? "button" : ""} 
        on:click
    >
    {#if faceDown}
        <img 
            src={cardImage} 
            alt="Pixel art teddy bear sits behind a grassy overlay. A cherry blossom tree reaches over him against a sky blue backdrop" 
        />
    {:else}
        <h1>{card.title}</h1>
        <img src={card.image} alt={card.imageAlt} />
        <p>{card.description}</p>
    {/if}
    </svelte:element>
</div>

<style lang="sass">
    @use '../../styles/colours'
    @use '../../styles/cards'

    %card-size
        width: cards.$width
        height: cards.$height
        border-radius: cards.$border-radius

    .outline
        border: cards.$border-size solid colours.$border
        background-color: colours.$border
        @extend %card-size

    .background 
        all: unset
        width: cards.$width
        height: cards.$height
        border-radius: cards.$border-radius
        cursor: pointer
        transition: background-color 0.5s ease-out, color 0.5s ease-out

        &.faceUp
            background-color: colours.$images

            &.shown:hover
                background-color: colours.$highlight
                color: colours.$border

        &.faceDown
            background-color: colours.$card-background

            &.shown:hover
                background-color: colours.$card-highlight

        img
            @extend %card-size

        
</style>