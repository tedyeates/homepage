import type { CardType, TechnologyTagsType } from "../types";
import spiceImage from "../../images/project/spice_addiction_upscale.png"
import inventoryManagement from "../../images/project/inventory_management_system.png"
import nodeGraph from "../../images/project/node_graph_crop.png"
import camelCarry from "../../images/project/camel_carry.png"
import ghostGame from "../../images/project/ghost_game.png"

import teddyLogo from "../../images/project/teddy_logo_highlight.png"
import me from "../../images/project/me.jpg"
import meClimbing from "../../images/project/me_climbing_action.jpeg"

import gradle from "../../images/technology/gradle.svg"
import java from "../../images/technology/java.svg"
import d3 from "../../images/technology/d3.svg"
import javascript from "../../images/technology/javascript.svg"
import python from "../../images/technology/python.svg"
import react from "../../images/technology/react.svg"
import docker from "../../images/technology/docker.svg"
import aws from "../../images/technology/aws.png"
import dynamodb from "../../images/technology/dynamodb.svg"
import postgres from "../../images/technology/postgresql.svg"
import typescript from "../../images/technology/typescript.svg"
import django from "../../images/technology/django.svg"
import cypress from "../../images/technology/cypress.png"
import unity from "../../images/technology/unity.svg"
import csharp from "../../images/technology/csharp.svg"

const technologies: TechnologyTagsType = {
    gradle: {
        name: "Gradle",
        icon: gradle,
        iconAlt: "Gradle Logo (Elephant)"
    },
    java: {
        name: "Java",
        icon: java,
        iconAlt: "Java Logo (Coffee Cup)"
    },
    react: {
        name: "React",
        icon: react,
        iconAlt: "React Logo (Light blue nucleus surrounded by 3 light blue rings forming a star shape"
    },
    d3: {
        name: "D3",
        icon: d3,
        iconAlt: "D3 Logo (Orange Letters, D3)"
    },
    javascript: {
        name: "JavaScript",
        icon: javascript,
        iconAlt: "JavaScript Logo (Black letters on yellow background, JS)"
    },
    python: {
        name: "Python",
        icon: python,
        iconAlt: "Python Logo (Two pythons entangled, one blue and one yellow)"
    },
    docker: {
        name: "Docker",
        icon: docker,
        iconAlt: "Docker Logo (Two pythons entangled, one blue and one yellow)"
    },
    aws: {
        name: "AWS",
        icon: aws,
        iconAlt: "AWS Logo (AWS letters with orange smile underneath with arrow on the end)"
    },
    dynamodb: {
        name: "DynamoDB",
        icon: dynamodb,
        iconAlt: "DynamoDB Logo (3D blue gradient decagonal box resembling a server)"
    },
    postgres: {
        name: "PostgreSQL",
        icon: postgres,
        iconAlt: "PostgreSQL Logo (Blue Elephant head with white and black outline)"
    },
    typescript: {
        name: "TypeScript",
        icon: typescript,
        iconAlt: "TypeScript Logo (White letters on blue background, TS)"
    },
    django: {
        name: "Django",
        icon: django,
        iconAlt: "Django Logo (White letters on dark green background, dj)"
    },
    cypress: {
        name: "Cypress",
        icon: cypress,
        iconAlt: "Cypress Logo (Black letters, cy; y trails into circle surrounding with black to turquoise gradient)"
    },
    unity: {
        name: "Unity",
        icon: unity,
        iconAlt: "Unity Logo (3D Cube with missing inside resembling a hyper cube, one black side, dark grey side and a light grey side on top)"
    },
    csharp: {
        name: "C#",
        icon: csharp,
        iconAlt: "C# Logo (Hexagon with purple background and white letters, C#)"
    },
    opentowork: {
        name: "Open To Work",
    },
}

export const projects:CardType[] =  [
    {
        title: "Spice",
        technologyTags: [
            technologies.gradle, technologies.java
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
            technologies.react, technologies.d3, technologies.javascript, technologies.python
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
            technologies.docker, technologies.aws, technologies.dynamodb, technologies.postgres, technologies.react, technologies.typescript, technologies.django, technologies.cypress
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
            technologies.unity, technologies.csharp
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
            technologies.unity, technologies.csharp
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
        imageAlt: "Ted smiling with a black t-shirt and cap, back dropped by a palm tree and dark green grass",
        technologyTags: [technologies.opentowork],
        summary: `
            Software engineer with a passion for Cyber Security, Web Dev and Open Source.
        `,
        description: `
            I have a passion for <i>Cyber Security, Web Dev and Open Source</i>.
            I love learning, whether that is new technologies, like <i>Svelte</i>; 
            languages, such as <i>Thai</i>; or anything in between. 
            I also have experience working in the Software Development and Cyber Security 
            industry at Atheneum and BT Security.
        `
    },
    "Contact Me": {
        title: "Contact Me",
        image: teddyLogo,
        imageAlt: "Pixel art teddy face with white outline",
        summary: `Connect with me on LinkedIn or Github`,
        description: `
            If you are recruiting, 
            looking to collaborate on a project or just want to talk technology, 
            you can contact me or view my current projects at the following links
            <br/>
            <br/>
            <hr>
        `,
        hasContactIcons: true
    },
    "Interests": {
        title: "Interests",
        image: meClimbing,
        imageAlt: "Ted climbing a difficult bouldering route with Shiba Inu cartoon chalk bag",
        summary: `
            I am interested in climbing, martial arts, games (computer and board) as
            well as web hacking and physical security
        `,
        description: `
            I have been climbing since I was young and begun trad climbing in Uni; I have
            seconded and lead climbed in Pembrokeshire and Dartmoor. I am also a brown belt
            in Judo, orange in Kung Fu and yellow in Ju Jitsu.
            I enjoy ethical web hacking and lock picking.
            I also like playing strategy board games like Terraforming Mars and also 
            play computer games; right now, I am playing 
            <i>Divinity: Original Sin 2 and modded Minecraft</i>.
        `
    },
}