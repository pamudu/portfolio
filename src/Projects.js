import React from 'react'
import './Projects.css';
function Projects() {

    const redirect =()=>{
        window.location.href = "https://github.com/pamudu/E-commerce/tree/master";
    };
    const redirect_birdo=()=>{
        window.location.href = "https://github.com/teamAuror/BirdRecognitionApp";
    };
    const redirect_netflix=()=>{
        window.location.href = "https://github.com/pamudu/Netflix-clone/tree/master";
    };
    const redirct_league=()=>{
        window.location.href = "https://github.com/pamudu/E-commerce/tree/master";
    };

    return (
        <div id="projects">
            <div className="projects__title"><h1>Projects</h1></div>
            <div className="card-container">
                <div className="card-2" onClick = {redirect_birdo}>
                    <div className="ani__container"><div className="birdo"></div></div>
                    <h3 className="card__title">Birdo - Mobile Application</h3>
                    <p className="card__description">Mobile application created using deep learning for identifying birds for bird watchers</p>
                </div>
                <div className="card-2" onClick = {redirct_league}>
                    <div className="ani__container2"><div className="birdo"></div></div>
                    <h3 className="card__title">Primier League Management</h3>
                    <p className="card__description">Design and develop Java based application by following object oriented programming</p>
                </div>
            
                <div className="card-2" onClick = {redirect}>
                    <div className="ani__container3"><div className="ecommerce"></div></div>
                    <h3 className="card__title">E - commerce Website</h3>
                    <p className="card__description">E-commerce website laptops developed using PHP server-side to purchase laptops.</p>
                </div>
                <div className="card-2" onClick = {redirect_netflix}>
                    <div className="ani__container4"><div className="netflix"></div></div>
                    <h3 className="card__title">Netflix Clone</h3>
                    <p className="card__description">Netflix landing page cloned by adhering react and hosted on Google cloud platform.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
