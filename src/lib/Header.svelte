<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/images/teddy_logo.png';
	import GithubIcon from '$lib/GithubIcon.svelte';
	import LinkedinIcon from '$lib/LinkedinIcon.svelte';
    import ContactIconLink from '$lib/ContactIconLink.svelte';
</script>

<header>
    <div class="corner" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">
            <img src={logo} alt="Teddy Bear" />
        </a>
    </div>


    <div class="corner">
        <ContactIconLink 
            size={2}
            link="https://github.com/tedyeates" 
            let:color
            let:size
        >
            <GithubIcon {size} {color} />
        </ContactIconLink>
        <ContactIconLink 
            size={2}
            link="https://www.linkedin.com/in/ted-yeates-11b14814a/" 
            let:color
            let:size
        >
            <LinkedinIcon {size} {color} />
        </ContactIconLink>
    </div>
</header>

<style lang="sass">
    header
        display: flex
        justify-content: space-between
        height:5vh

    .corner
        display: flex
        justify-content: space-between
        gap: .5rem
        padding: .5rem

        a 
            display: flex
            align-items: center
            justify-content: center
            width: 100%
            height: 100%

        img
            width: 2em
            height: 3em
            object-fit: contain

        a:hover
            color: var(--highlight)
</style>
