import React from 'react'
import ProjectComponent from './ProjectComponent'

const projects = [
    {
        name: "Ableton Copy Website",
        description: "A simple copy of a page of the Ableton website, it's the more similar way I could do it. Feel free to compare the two websites.",
        img: "first-project.jpeg",
        url: "https://ceriowl.github.io/AbletonPractice/",
        extra: {
            another_website: "https://www.ableton.com/en/about/"
        }
    },
    {
        name: "Anime Search",
        description: "It's a website where you can search information of any manga or anime that you want. Was made using HTML, CSS and Javascript.",
        img: "second-project.jpeg",
        url: "https://ceriowl.github.io/anime-manga-searching.github.io/",
        extra: ""
    }
]

export default function Projects() {
    
    return (
        <section className='projects-daylight' id='projects'>
            {
                projects.map((project, index) => <ProjectComponent key={index} props={project} />)
            }
        </section>
    )
}
