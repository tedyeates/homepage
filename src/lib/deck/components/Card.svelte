<script lang="ts">
	import ContactIconLink from '$lib/ContactIconLink.svelte';
	import GithubIcon from '$lib/GithubIcon.svelte';
	import LinkedinIcon from '$lib/LinkedinIcon.svelte';
    import cardImage from '$lib/images/card/BearCardScaled.png'
	import type { CardType } from '../types';
	import Tags from './Tags.svelte';

    export let faceDown:boolean = false
    export let isInFront:boolean = true
    export let card:CardType

    export let hasExpanded:boolean = false
    

    export let ariaLabel = "Project Card Front"
    if (faceDown) ariaLabel = "Project Card Back"

    let invertColors = true
</script>

<div 
    class="outline" 
    class:card-expanded-size={hasExpanded}
>
    <svelte:element
        this={isInFront ? "button" : "div"} 
        class:in-front={isInFront && !hasExpanded}
        class:face-down={faceDown}
        class="background" 
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
                </div>
                {#if card.technologyTags}
                    <Tags technologies={card.technologyTags} {hasExpanded} />
                {/if}
                {#if card.image}
                <div class="image-background">
                    <img src={card.image} alt={card.imageAlt} />
                </div>
                {/if}
            </div>
            <p>{@html hasExpanded ? card.description : card.summary}</p>
            {#if card.hasContactIcons}
                {#if hasExpanded}
                <div class="contact-icons">
                    <ContactIconLink 
                        invertColors
                        size={4}
                        link="https://github.com/tedyeates" 
                        label="LinkedIn"
                        hasExpanded
                        let:color
                        let:size
                    >
                        <LinkedinIcon {size} {color} />
                    </ContactIconLink>
                    <br>
                    <br>
                    <ContactIconLink 
                        invertColors
                        size={4}
                        link="https://github.com/tedyeates" 
                        label="GitHub"
                        hasExpanded
                        let:color
                        let:size
                    >
                        <GithubIcon {size} {color} />
                    </ContactIconLink>
                </div>
                {:else}
                <div class="contact-icons">
                    <ContactIconLink 
                        {invertColors}
                        size={2}
                        link="https://www.linkedin.com/in/ted-yeates-11b14814a/" 
                        let:color
                        let:size
                    >
                        <LinkedinIcon {size} {color} />
                    </ContactIconLink>
                    <ContactIconLink 
                        {invertColors}
                        size={2}
                        link="https://github.com/tedyeates" 
                        let:color
                        let:size
                    >
                        <GithubIcon {size} {color} />
                    </ContactIconLink>
                </div>
                {/if}
            {/if}
        </section>
    {/if}
    </svelte:element>
</div>

<style lang="sass">
    @use '../../styles/cards'
    @use '../../styles/colours'

    .contact-icons
        padding-top: .4rem

    span
        color: colours.$text
        background-color: colours.$detail
        border-radius: cards.$border-radius * 2
        padding: .1rem .5rem

</style>