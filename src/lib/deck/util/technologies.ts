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
import svelte from "../../images/technology/svelte.svg"
import sass from "../../images/technology/sass.svg"
import type { TechnologyTagType } from "../types"


export const technologies = new Map<string, TechnologyTagType>([
    ['gradle', {
        name: "Gradle",
        icon: gradle,
        iconAlt: "Gradle Logo (Elephant)"
    }],
    ['java', {
        name: "Java",
        icon: java,
        iconAlt: "Java Logo (Coffee Cup)"
    }],
    ['react', {
        name: "React",
        icon: react,
        iconAlt: "React Logo (Light blue nucleus surrounded by 3 light blue rings forming a star shape"
    }],
    ['d3', {
        name: "D3",
        icon: d3,
        iconAlt: "D3 Logo (Orange Letters, D3)"
    }],
    ['javascript', {
        name: "JavaScript",
        icon: javascript,
        iconAlt: "JavaScript Logo (Black letters on yellow background, JS)"
    }],
    ['python', {
        name: "Python",
        icon: python,
        iconAlt: "Python Logo (Two pythons entangled, one blue and one yellow)"
    }],
    ['docker', {
        name: "Docker",
        icon: docker,
        iconAlt: "Docker Logo (Two pythons entangled, one blue and one yellow)"
    }],
    ['aws', {
        name: "AWS",
        icon: aws,
        iconAlt: "AWS Logo (AWS letters with orange smile underneath with arrow on the end)"
    }],
    ['dynamodb', {
        name: "DynamoDB",
        icon: dynamodb,
        iconAlt: "DynamoDB Logo (3D blue gradient decagonal box resembling a server)"
    }],
    ['postgres', {
        name: "PostgreSQL",
        icon: postgres,
        iconAlt: "PostgreSQL Logo (Blue Elephant head with white and black outline)"
    }],
    ['typescript', {
        name: "TypeScript",
        icon: typescript,
        iconAlt: "TypeScript Logo (White letters on blue background, TS)"
    }],
    ['django', {
        name: "Django",
        icon: django,
        iconAlt: "Django Logo (White letters on dark green background, dj)"
    }],
    ['cypress', {
        name: "Cypress",
        icon: cypress,
        iconAlt: "Cypress Logo (Black letters, cy; y trails into circle surrounding with black to turquoise gradient)"
    }],
    ['unity', {
        name: "Unity",
        icon: unity,
        iconAlt: "Unity Logo (3D Cube with missing inside resembling a hyper cube, one black side, dark grey side and a light grey side on top)"
    }],
    ['csharp', {
        name: "C#",
        icon: csharp,
        iconAlt: "C# Logo (Hexagon with purple background and white letters, C#)"
    }],
    ['svelte', {
        name: "Svelte",
        icon: svelte,
        iconAlt: "Svelte Logo (White letters on red background, S)"
    }],
    ['sass', {
        name: "Sass",
        icon: sass,
        iconAlt: "Sass Logo (Pink cursive letters, Sass)"
    }],
    ['opentowork', {
        name: "Open To Work",
    }],
])
