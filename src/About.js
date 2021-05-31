import React from 'react'
import './About.css';
import video from './image/video.mp4';

function About() {

    return (
        <div id="about">
        <div className="about">
            <div  ></div>
            <div className="about__title">ABOUT</div>
            <div className="about__container">
                <div className="about__description">I am an undergraduate at the Informatics Institute of 
                Technology in affiliation with the University of Westminster.I am currently following a software
                 engineering course with the keen interest to work as a full-stack developer.Energetic, highly motivated, commited and  
                 passionate college student aiming to use the knowledge that I have acquired through my projects, 
                        coursework's, selfstudy and my hard work.</div>
                <div className="about__video">
                    <video  autoPlay muted loop>
                        <source  src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About
