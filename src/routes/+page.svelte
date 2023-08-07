<script>
	import Deck from "$lib/deck/Deck.svelte";
	import Hand from "$lib/deck/Hand.svelte";
</script>

<svelte:head>
	<title>Teddy</title>
	<meta name="description" content="Ted Yeates Project Portfolio" />
</svelte:head>

<article>
    <section>
        <Deck 
            cards={[
                {title: "test", description: "testing"},
                {title: "test", description: "testing"},
                {title: "test", description: "testing"},
                {title: "test", description: "testing"}
            ]}
        />
    </section>
    <section>
        <Hand 
            cards={[
                {title: "test", description: "testing"},
                {title: "test", description: "testing"},
                {title: "test", description: "testing"},
            ]}
        />
    </section>
</article>

<style lang="sass">
    section
        display: flex
        align-items: center
        justify-content: center
</style>
