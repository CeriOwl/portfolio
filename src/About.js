import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub, BsSpotify } from "react-icons/bs";
import { IconContext } from "react-icons"
const public_url = process.env.PUBLIC_URL;

export default function About() {
  return (
    <section className='about' id='about'>
        <div> 
          <picture>
            <img src={public_url + "personal_photo.jpg"} alt="It's me, using a black shirt and in the background is the pet of github with different customes" />
          </picture>
          <div>
            <a href='#'><BsLinkedin className='icon' values={{color: "blue"}}/></a>
            <a href='#'><BsGithub className='icon' /></a>
            <a href='#'><BsTwitter className='icon' /></a>
            <a href='#'><BsSpotify className='icon' /></a>
          </div>
        </div>
        <div>
          <p>
          Hello there! My name is Alejandro Camacho, and I'm a <strong>Junior Frontend Developer</strong>. I'm currently studying Computer Engineering at Universidad de Guadalajara. I have experience working with web technologies such as <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and I'm also currently <strong>learning React</strong> (in fact, I built this website using ReactJs). In addition to frontend development, I also have experience with backend technologies like PostgreSQL and MySQL for databases, and Express (NodeJs) and PHP for routing and connections.
          </p>
          <p>
          I'm currently working as a freelancer and taking on self-directed projects to continually improve my skills. I have a <strong>B2 level</strong> of proficiency in the <strong>English language</strong>. My hobbies include playing video games, listening to a variety of music genres (including K-pop, Hip-Hop, Reggaeton, Indie, Alternative, corridos tumbados, and more), and learning new languages. Currently, I'm focusing on improving my English vocabulary and grammar, and I'm also trying to learn Korean because I find it super cool.
          </p>
          <p>
          Although my expertise lies primarily in web development, I'm not afraid to work with other technologies, frameworks, or languages if it means finding the best solution for the problem at hand.
          </p>
        </div>
    </section>
  )
}
