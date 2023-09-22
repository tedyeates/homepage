<script lang="ts">

	import ContactIconLink from "$lib/ContactIconLink.svelte"
	import GithubIcon from "$lib/GithubIcon.svelte";
	import LinkedinIcon from "$lib/LinkedinIcon.svelte";

    export let invertColors: boolean
    export let hasExpanded: boolean
    export let iconWidth: number
    export let iconHeight: number

</script>
<ContactIconLink 
    invertColors={invertColors || hasExpanded}
    hasExpanded={hasExpanded}
    label={hasExpanded ? "LinkedIn" : ""}
    link="https://www.linkedin.com/in/ted-yeates-11b14814a/" 
    let:color

>
    <LinkedinIcon 
        width={iconWidth} 
        height={iconHeight}  
        {color} 
    />
</ContactIconLink>
<ContactIconLink 
    invertColors={invertColors || hasExpanded}
    hasExpanded={hasExpanded}
    label={hasExpanded ? "Github" : ""}
    link="https://github.com/tedyeates" 
    let:color
>
    <GithubIcon 
        width={iconWidth} 
        height={iconHeight}  
        {color} 
    />
</ContactIconLink>