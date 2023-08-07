<script lang="ts">
    import cardImage from '$lib/images/BearCardScaled.png'
	import type { CardType } from './types';

    export let faceDown = true
    export let card:CardType
</script>

<div class="outline">
    <div class="background">
        <img src={cardImage} alt="Project Card"/>
    </div>
</div>

<style lang="sass">
    @use '../styles/colours'
    @use '../styles/cards'

    %card-size
        width: cards.$width
        height: cards.$height
        border-radius: cards.$border-radius

    .outline
        border: cards.$border-size solid colours.$border
        background-color: colours.$border
        @extend %card-size

    .background 
        background-color: colours.$card-background
        transition: background-color 0.5s ease-out
        @extend %card-size

        img
            @extend %card-size

        &:hover
            background-color: colours.$card-highlight

        .front
            background-color: colours.$shading
            border-radius: cards.$border-radius
</style>