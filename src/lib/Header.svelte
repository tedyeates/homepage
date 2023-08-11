<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/images/teddy_logo.png';
	import GithubIcon from '$lib/GithubIcon.svelte';
    import colourPalette from '$lib/constants/colour-palette';
	import LinkedinIcon from '$lib/LinkedinIcon.svelte';

    let iconColor = {
        github: colourPalette.images,
        linkedin: colourPalette.images
    }

    const onIconHover = (key:string) => {
        iconColor = {...iconColor, [key]:colourPalette.highlight}
    }

    const onIconHoverOut = (key:string) => {
        iconColor = {...iconColor, [key]:colourPalette.images}
    }
</script>

<header>
    <div class="corner" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">
            <img src={logo} alt="Teddy Bear" />
        </a>
    </div>


    <div class="corner">
        <a 
            on:mouseover={() => onIconHover("github")}
            on:focus={() => onIconHover("github")}
            on:mouseout={() => onIconHoverOut("github")}
            on:blur={() => onIconHoverOut("github")}
            href="https://github.com/tedyeates"
            target="_blank"
            aria-label="Github Ted Yeates"
        >
            <GithubIcon color={iconColor.github}/>
        </a>
        <a 
            on:mouseover={() => onIconHover("linkedin")}
            on:focus={() => onIconHover("linkedin")}
            on:mouseout={() => onIconHoverOut("linkedin")}
            on:blur={() => onIconHoverOut("linkedin")}
            href="https://www.linkedin.com/in/ted-yeates-11b14814a/"
            target="_blank"
            aria-label="Linkedin Ted Yeates"
        >
            <LinkedinIcon color={iconColor.linkedin}/>
        </a>
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
