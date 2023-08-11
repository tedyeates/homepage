<script lang="ts">
    import cardImage from '$lib/images/card/BearCardScaled.png'
	import type { CardType } from '../types';
	import Tags from './Tags.svelte';

    export let faceDown:boolean = false
    export let isInFront:boolean = true
    export let card:CardType

    export let hasExpanded:boolean = false
    

    export let ariaLabel = "Project Card Front"
    if (faceDown) ariaLabel = "Project Card Back"
</script>

<div 
    class="outline" 
    class:card-expanded-size={hasExpanded}
>
    <svelte:element 
        this={isInFront ? "button" : "div"} 
        class:in-front={isInFront}
        class:face-down={faceDown}
        class="background" 
        aria-label={ariaLabel} 
        role={isInFront ? "button" : ""} 
        on:click
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
                <Tags technologies={card.technologyTags} />
                <div class="image-background">
                    <img src={card.image} alt={card.imageAlt} />
                </div>
            </div>
            <p>{hasExpanded ? card.description : card.summary}</p>
        </section>
    {/if}
    </svelte:element>
</div>

<style lang="sass">
    @use '../../styles/cards'
</style>