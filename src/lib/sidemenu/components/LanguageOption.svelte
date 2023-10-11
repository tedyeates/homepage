<script lang='ts'>
	import type { TechnologyTagType } from "$lib/deck/types";

    export let option: TechnologyTagType | undefined
</script>

{#if option}
<span>
    {#if option.icon}
    <img src={option.icon} alt={option.iconAlt} height="20px" width="20px"/>
    {/if}
    {option.name}
</span>
{/if}

<style lang="sass">
    @use '../../styles/colours'

    span
        display: flex
        background-color: colours.$background
</style>