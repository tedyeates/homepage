import type { CardType } from "../types";
import spiceImage from "../../images/project/spice_addiction_upscale.png"
import inventoryManagement from "../../images/project/inventory_management_system.png"
import nodeGraph from "../../images/project/node_graph_crop.png"
import teddyLogo from "../../images/project/teddy_logo_highlight.png"
import bearPaw from "../../images/project/bear_paw_highlight.png"

export const projects:CardType[] =  [
    {
        title: "Spice",
        technologyTags: [
            "Gradle", "Java"
        ],
        link: "https://github.com/tedyeates/spice",
        linkText: "Spice | Github",
        image: spiceImage,
        summary: "Minecraft mod inspired by Dune",
        description: `
            Minecraft mod using <i>Gradle</i> that introduces a substance called Spice
            inspired by the book Dune. This will be part of a series of mods 
            using inspiration from the desert and cultural themes of Dune as 
            well as it's unique perspective on technology. As with most of my
            projects, it has full Thai language support. 
        `
    },
    {
        title: "Text Forensics",
        technologyTags: [
            "React", "D3", "JavaScript", "Python"
        ],
        image: nodeGraph,
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
            "Docker", "AWS", "React", "Typescript", "Django", "Cypress"
        ],
        image: inventoryManagement,
        summary: "System for managing metal inventory for a Thai electronics company",
        description: `
            <i>Django</i> and <i>PostgreSQL</i> based inventory management 
            for a Thai electronics company to manage metal inventory which included handling
            rod cutting and 2D sheet cutting. Previously hosted on <i>AWS Elastic Beanstalk</i>
            and <i>S3</i> with <i>DynamoDB</i>.
        `
    },
]

type HandCardsType = {
    [key: string]: CardType
}

export const pages:HandCardsType =  {
    "About": {
        title: "About",
        image: teddyLogo,
        technologyTags: ["Open to Work"],
        summary: `
            Software engineer with a passion for Cyber Security, Web Dev and Open Source.
            <hr>
            <strong>Click me for more information or draw a card from the deck above!</strong><br>
        `,
        description: `
            I am a Software engineer with a passion for <i>Cyber Security, Web Dev and Open Source</i>.
            I love learning, whether that is new technologies, like <i>Svelte</i>; 
            languages, such as <i>Thai</i>; or anything in between.
            <hr>
            I am interested in <i>climbing</i>, <i>cooking</i> and <i>web hacking</i>.
            Right now, I am playing 
            <i>Divinity: Original Sin 2 and Minecraft</i>.
        `
    },
    "Contact Me": {
        title: "Contact Me",
        image: bearPaw,
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