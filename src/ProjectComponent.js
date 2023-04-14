import React, { useState } from 'react'
const public_url = process.env.PUBLIC_URL;

export default function ProjectComponent({ props }) {
    const [div, divToActive] = useState("inactive")
    
    function mouseOver() {
        divToActive("hover-active")
    }

    function mouseOut() {
        divToActive("inactive")
    }

    return (
        <div className="project">
            <h2>{props.name}</h2>
            <div className={`container-image-project ${div}`} >
                <a href={props.url} target="_blank" rel='noreferrer'>
                    <img src={public_url + props.img} onMouseOver={mouseOver} onMouseOut={mouseOut} alt={props.img} />
                </a>
            </div>
            <p>{props.description}</p>
            {
                props.extra ? <div className='container-link-extra'><a className='link-extra' href={props.extra} target='_blank' rel="noreferrer">Click here to the original web</a></div> : ""
            }
        </div>

    )
}