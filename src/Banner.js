import { Button } from '@material-ui/core';
import React from 'react'
import './Banner.css';
import Navigation from './Navigation';
import Typical from 'react-typical';

function Banner() {
    return (
        <div id="home" className="banner">
            <Navigation />
            <div className="banner__content">
                <div className="banner__title">
                    <h1 className="title__text">Hi I'm Pamudu</h1>
                    <h2 className="title__description">I'm a {' '}<Typical className="animate__text"
                            steps={['Innovative Developer', 1000, 'Designer', 1000, 'Full Stack Developer', 1000]}
                                        loop={Infinity}
                                        wrapper="b"/>
                    </h2>
                    
                </div>
            </div>
            <div className="banner__button" >
                        <a href="#about"><Button variant="contained" color="primary">About Me</Button></a>
            </div>
        </div>
    )
}

export default Banner
