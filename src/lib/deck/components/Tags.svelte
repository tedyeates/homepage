<script lang="ts">
    export let technologies: string[]
    export let hasExpanded: boolean = false
</script>

<div class:card-expanded={hasExpanded}>
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
        flex-wrap: wrap
        gap: .1rem
        padding: .2rem 0
        font-size: .9rem

        &.card-expanded
            font-size: cards.$expanded-font-size
</style>