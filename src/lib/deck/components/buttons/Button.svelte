<script lang="ts">
	import ContactIconLink from "$lib/ContactIconLink.svelte";
	import Icon from "@iconify/svelte";

    export let iconClass: string
    export let bottom: string = "none"
    export let right: string = "none"
    export let top: string = "none"
    export let height: number = 0
    export let backgroundColor: string = "none"
    export let center:boolean = false
</script>


<button 
    class="button"
    class:center
    style="bottom: {bottom}; right: {right}; top: {top}; background-color: {backgroundColor}; --background-color: {backgroundColor}"
    on:click|stopPropagation
>
    <ContactIconLink
        invertColors
        let:color
    >
        <Icon 
            icon={iconClass}
            {height}
            {color}
        />
    </ContactIconLink>
</button>

<style lang="sass">
    @use '../../../styles/cards'
    @use '../../../styles/colours'
    
    .button
        @extend %remove-button-styling
        position: absolute
        border-radius: 5px
        border: 2px solid var(--background-color)

    .center
        transform: translate(50%, 0)

</style>