<script lang="ts">
    import cardImage from '$lib/images/card/BearCardScaled.png'
	import { createEventDispatcher } from 'svelte';
	import type { CardType, DiscardEventType } from '../types';
	import { getIconSize } from '../util/icons';
	import Tags from './Tags.svelte';
	import ContactIcons from './ContactIcons.svelte';
	import Button from './buttons/Button.svelte';
    import color from '$lib/constants/colour-palette'

    export let faceDown:boolean = false
    export let isInFront:boolean = true
    export let hideDiscardButton:boolean = false
    export let card:CardType
    export let hideCards: () => void

    export let hasExpanded:boolean = false
    

    export let ariaLabel = "Project Card Front"
    if (faceDown) ariaLabel = "Project Card Back"

    let invertColors = true

    let innerWidth = 0
    let innerHeight = 0
    $: iconSize = getIconSize(innerWidth, innerHeight, 5)

    $: iconWidth = iconSize.iconWidth
    $: iconHeight = iconSize.iconHeight

    $: if (!hasExpanded) {
        iconWidth = iconSize.iconWidth / 2
        iconHeight = iconSize.iconHeight / 2
    } else {
        iconWidth = iconSize.iconWidth
        iconHeight = iconSize.iconHeight
    }

    const dispatch = createEventDispatcher<DiscardEventType>()

    const onClickDiscard = (event: MouseEvent, cardTitle: string) => {
        dispatch('discard', {
            cardTitle
        })
    }

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div 
    class="outline" 
>
    <svelte:element
        this={isInFront ? "button" : "div"} 
        class:in-front={isInFront && !hasExpanded}
        class:face-down={faceDown}
        class:has-expanded={hasExpanded}
        class="background" 
        disabled={hasExpanded}
        aria-label={ariaLabel} 
        role={isInFront ? "button" : ""} 
        on:click
        on:mouseover={() => invertColors = false}
        on:focus={() => invertColors = false}
        on:mouseout={() => invertColors = true}
        on:blur={() => invertColors = true}
    >
    {#if faceDown}
        <img 
            class="back-image"
            src={cardImage} 
            alt="Pixel art teddy bear sits behind a grassy overlay. A cherry blossom tree reaches over him against a sky blue backdrop" 
        />
    {:else}
        <section class="card-content">
            <div class="card-content-header">
                <div class="title">
                    <h2>{card.title}</h2>
                    {#if card.link}
                        🔗<a target="_blank" href={card.link}>{card.linkText}</a>
                    {/if}
                    {#if !hideDiscardButton }
                    <Button 
                        on:click={(event) => onClickDiscard(event, card.title)} 
                        iconClass="icon-park-solid:delete-four"
                        right="0"
                        top="0"
                        height={26}
                        backgroundColor={color.detail}
                    >
                        Discard
                    </Button>
                    {/if}
                </div>
                {#if card.technologyTags}
                    <Tags technologies={card.technologyTags} {hasExpanded} />
                {:else}
                    <div class="separator"></div>
                {/if}
                {#if card.image}
                <div class="image-background">
                    <img src={card.image} alt={card.imageAlt} />
                </div>
                {/if}
            </div>
            <p class:has-expanded={hasExpanded}>
                {@html hasExpanded ? card.description : card.summary}
            </p>
            {#if card.hasContactIcons}
                <div class="contact-icons" class:has-expanded={hasExpanded}>
                    <ContactIcons 
                        {invertColors} 
                        {iconWidth} 
                        {iconHeight} 
                        {hasExpanded}
                    />
                </div>
            {/if}
            {#if hasExpanded}
                <Button 
                    center
                    on:click={hideCards} 
                    iconClass="icon-park-solid:down-c" 
                    right="50%"
                    bottom="0"
                    height={50}
                />
            {/if}
        </section>
    {/if}
    </svelte:element>
</div>

<style lang="sass">
    @use '../../styles/colours'
    @use '../../styles/cards'
    @use '../../styles/fonts'
    @use "sass:math"

    $border-size: 6px

    %card-size
        border-radius: cards.$border-radius
        height: 100%
        width: 100%

    .outline
        background-color: colours.$border
        border: $border-size solid colours.$border
        border-radius: cards.$border-radius
        height: calc(100% - #{$border-size * 2})
        width: calc(100% - #{$border-size * 2})


    .background
        @extend %remove-button-styling
        display: flex
        background-color: colours.$images
        justify-content: center
        @extend %card-size

        transition: background-color cards.$transition-speed ease-out, color cards.$transition-speed ease-out

        .back-image
            @extend %card-size

        &.in-front:hover
            background-color: colours.$highlight
            color: colours.$border
            cursor: pointer

        &.face-down
            background-color: colours.$card-background

            &.in-front:hover
                background-color: colours.$card-highlight

        &.has-expanded
            cursor: default
            

    .card-content
        display: flex
        flex-direction: column
        padding: math.div(cards.$padding, 2) cards.$padding
        height: 100%
        width: calc(100% - #{cards.$padding})

    h2
        display: inline

    p.has-expanded
        font-size: fonts.$font-size-expanded
        text-align: left

    .card-content-header 
        display: flex
        flex-direction: column
        justify-content: center
        
        .title 
            padding: 5px
            text-align: center
            color: colours.$text
            background: colours.$detail
            border-radius: cards.$border-radius

        a
            font-size: fonts.$font-size
            @extend %card-link

    .image-background
        display: flex
        justify-content: center
        align-items: center
        background-color: colours.$detail
        border: colours.$detail solid colours.$border
        border-radius: cards.$border-radius

        $image-back-size: calc(100% - #{$border-size} * 2)
        width:  $image-back-size
        aspect-ratio: 1
        margin: 0 auto

        img
            border-radius: cards.$border-radius
            height: $image-back-size
            width: $image-back-size


    .contact-icons
        padding-top: .4rem
        display: flex
        gap: 3vw
        width: 60%

        &.has-expanded
            flex-direction: column
            gap: 1vh
            width: 80%

        @media only screen and (min-width: 768px)
            justify-content: center
            gap: 2vw
            width: 70%

            &.has-expanded
                flex-direction: row
                margin: 0 auto
                gap: 2vw
                width: 80%


    span
        color: colours.$text
        background-color: colours.$detail
        border-radius: cards.$border-radius * 2
        padding: .1rem .5rem

    .separator
        height: .7rem
</style>