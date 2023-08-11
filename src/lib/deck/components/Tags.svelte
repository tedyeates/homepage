<script lang="ts">
    export let technologies: string[]
</script>

<div>
{#each technologies as technology}
    <span>{technology}</span>
{/each}
</div> 

<style lang="sass">
    @use "../../styles/colours"
    @use "../../styles/cards"

    span
        color: colours.$text
        background-color: colours.$detail
        border-radius: cards.$border-radius * 2
        padding: .1rem .5rem

    div
        display: flex
        gap: .1rem
        padding: .2rem 0
</style>