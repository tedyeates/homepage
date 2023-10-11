<script lang="ts">
    import { page } from '$app/stores'
    import logo from '$lib/images/teddy_logo.png'
	import GithubIcon from '$lib/GithubIcon.svelte'
	import LinkedinIcon from '$lib/LinkedinIcon.svelte'
    import ContactIconLink from '$lib/ContactIconLink.svelte'
	import { getIconSize } from './deck/util/icons'
    import MultiSelect from 'svelte-multiselect'
	import { technologies } from './deck/util/technologies';
	import LanguageOption from './sidemenu/components/LanguageOption.svelte';

    let innerWidth = 0
    let innerHeight = 0
    $: iconSize = getIconSize(innerWidth, innerHeight, 2)

    let expanded = false

</script>

<svelte:window bind:innerWidth bind:innerHeight on:click={() => expanded=false} />

<header>
    <nav>
        <ul class="navbar pagebar" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <li>
                <a href="#top" on:click|stopPropagation={() => expanded=!expanded}>
                    <img src={logo} alt="Teddy Bear" />
                </a>
            </li>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
        </ul>
        <ul class="navbar">
            <li>
                <ContactIconLink 
                    link="https://github.com/tedyeates" 
                    let:color
                >
                    <GithubIcon width={iconSize.iconWidth} height={iconSize.iconHeight} {color} />
                </ContactIconLink>
            </li>
            <li>
                <ContactIconLink 
                    link="https://www.linkedin.com/in/ted-yeates-11b14814a/" 
                    let:color
                >
                    <LinkedinIcon width={iconSize.iconWidth} height={iconSize.iconHeight} {color} />
                </ContactIconLink>
            </li>
        </ul>
    </nav>
</header>
<ul class="overlay" class:expanded>
    <li>
        <h3>Filters</h3>
        <MultiSelect options={[...technologies.keys()]}>
            <LanguageOption let:option option={technologies.get(option)} slot="selected" />
            <LanguageOption let:option option={technologies.get(option)} slot="option" />
        </MultiSelect>
    </li>
</ul>

<style lang="sass">
    @use 'styles/colours'
    @use 'styles/cards'

    nav
        display: flex
        justify-content: space-between
        height:5vh

    .overlay
        position: absolute
        background-color: colours.$images
        border: 6px solid colours.$border
        border-radius: cards.$border-radius
        margin-top: 5vh
        padding: 1vw 1vh
        z-index: 1
        height: 89vh
        width: 20vw
        visibility: hidden

        &.expanded
            visibility: hidden // TODO: turn to visible when finished

        h3
            margin-top: 0
        
        li
            display: block

    .pagebar
        display: flex
        gap: 1vw

        a
            @extend %card-link

    .navbar
        display: inline-flex
        padding: .5rem

        li
            display: inline

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
</style>
