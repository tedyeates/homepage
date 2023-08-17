import type { CardType } from "../types";
import spiceImage from "../../images/project/spice_addiction_upscale.png"
import inventoryManagement from "../../images/project/inventory_management_system.png"
import nodeGraph from "../../images/project/node_graph_crop.png"
import camelCarry from "../../images/project/camel_carry.png"
import ghostGame from "../../images/project/ghost_game.png"

import teddyLogo from "../../images/project/teddy_logo_highlight.png"
import me from "../../images/project/me.jpg"

export const projects:CardType[] =  [
    {
        title: "Spice",
        technologyTags: [
            "Gradle", "Java"
        ],
        link: "https://github.com/tedyeates/spice",
        linkText: "Github",
        image: spiceImage,
        imageAlt: `
            Minecraft with new status bar shaped as bowls of spice, 
            set in a desert. A bunny rabbit glows in the center, back dropped by 
            as setting sun
        `,
        summary: "Minecraft mod inspired by Dune",
        description: `
            Minecraft mod using <i>Gradle</i> that introduces a substance called Spice
            inspired by the book Dune. This will be part of a series of mods 
            using inspiration from the desert and cultural themes of Dune as 
            well as it's unique perspective on technology. As with a lot of my
            current projects, it has full Thai language support. 
        `
    },
    {
        title: "Text Forensics",
        technologyTags: [
            "React", "D3", "JavaScript", "Python"
        ],
        image: nodeGraph,
        imageAlt: `
            Node graph with Aloe Vera in the center surrounded by numerous connected users
            who have searched this term. Users who have searched the term more
            frequently are closer to the Aloe Vera node and larger.
        `,
        summary: "Text pattern matching to identify similar user accounts",
        description: `
            AI web app for identifying patterns in text across multiple ecommerce sites. Proof of 
            concept for the National Crime Agency for identifying individuals involved in illegal 
            plant trade.
            <br>
            Web crawling was implemented in <i>Python</i> with Undercrawler. <i>React</i> was used in 
            the front end with <i>d3</i> to display clusters and node graphs of linked users. <i>Redis</i>
            was used in the backend.
        `
    },
    {
        title: "Inventory System",
        technologyTags: [
            "Docker", "AWS", "DynamoDB", "Postgresql", "React", "Typescript", "Django", "Cypress"
        ],
        image: inventoryManagement,
        imageAlt: `
            Search bar with drop down showing multiple categorized search
            terms in the Thai language.
        `,
        summary: "System for managing metal inventory for a Thai electronics company",
        description: `
            <i>Django</i> and <i>PostgreSQL</i> based inventory management 
            for a Thai electronics company to manage metal inventory which included handling
            rod cutting and 2D sheet cutting. Previously hosted on <i>AWS Elastic Beanstalk</i>
            and <i>S3</i> with <i>DynamoDB</i>.
        `
    },
    {
        title: "Camel Carry",
        technologyTags: [
            "Unity", "C#",
        ],
        link: "https://eglekat.github.io/Camel-Carry",
        linkText: "Github",
        image: camelCarry,
        imageAlt: `
            A camel with a chest on it's back moves towards a market, back dropped by a desert.
            In the footer there is an inventory containing items including cold (blue) items,
            hot (red) items all with different prices and weights. On the right 
            is the camels inventory containing an axe and torch. 
        `,
        summary: "A puzzle game where where you have to delivery items to market",
        description: `
            Camel Carry is a puzzle game where you have to deliver items to market. 
            The key mechanic is inventory management which affects the speed of 
            the camel - it will go slower the more items it is carrying but if 
            it takes too many trips the market will close before you can make 
            enough gold. Made with a friend in <i>Unity (C#)</i> with the intention of 
            making an interactive tutorial.
        `
    },
    {
        title: "Ghost Game",
        technologyTags: [
            "Unity", "C#",
        ],
        link: "https://github.com/rookwood101/ghost-game",
        linkText: "Github",
        image: ghostGame,
        imageAlt: `
            A spooky ghost teenager slivers through the house, nuns run away
            from him scared. In the right the there is a spookometer.
        `,
        summary: "A game where you scare people using your voice's pitch and volume",
        description: `
            In Ghost Game you play as a ghost with the goal to scare as many people 
            as possible.  The key mechanic involves using your 
            microphone - varying your pitch will create tension making the NPCs 
            nervous and using loud noises will scare them. Made with a friend in 
            Unity (C#) with the intention of creating a game including an 
            innovative mechanic.
        `
    }
]

type HandCardsType = {
    [key: string]: CardType
}

export const pages:HandCardsType =  {
    "About": {
        title: "About",
        image: me,
        technologyTags: ["Open to Work"],
        summary: `
            Software engineer with a passion for Cyber Security, Web Dev and Open Source.
            <hr>
            <strong>Click me for more information or draw a card from the deck above!</strong><br>
        `,
        description: `
            I have a passion for <i>Cyber Security, Web Dev and Open Source</i>.
            I love learning, whether that is new technologies, like <i>Svelte</i>; 
            languages, such as <i>Thai</i>; or anything in between. 
            I also have experience working in the Software Development and Cyber Security 
            industry at Atheneum and BT Security.
            <hr>
            <strong>Hobbies</strong>: <i>climbing</i>, <i>cooking</i>, <i>web hacking</i>
            and <i>board games</i>.
            Right now, I am playing 
            <i>Divinity: Original Sin 2 and Minecraft</i>.
        `
    },
    "Contact Me": {
        title: "Contact Me",
        image: teddyLogo,
        summary: `Connect with me on LinkedIn or Github`,
        description: `
            If you are recruiting, 
            looking to collaborate on a project or just want to talk technology, 
            you can contact me or view my current projects at the following links
            <hr>
        `,
        hasContactIcons: true
    },
}