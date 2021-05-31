import React, { useEffect, useState } from 'react';
import './Navigation.css';

function Navigation() {
    useEffect(() =>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener('scroll');
        };
    },[]);
    const openMenu = () =>{
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeMenu =()=>{
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>
            <div className={`nav ${show && 'nav_black'}`}>
                <div className="nav__topic">
                    <h2>PORTFOLIO</h2>
                </div>
                <div classNane="nav__tabs">
                    <ul className="links">
                        <li><a className="link" href="#home">Home</a></li>
                        <li><a className="link" href='#about'>About</a></li>
                        <li><a className="link" href="#services">Services</a></li>
                        <li><a className="link" href="#projects">Projects</a></li>
                        <li><a className="link" href="#contact">Contact</a></li>
                    </ul>    
                </div>
            </div>

            <div id="mySidenav" className="sidenav">
                <span className="menu-2" onClick={closeMenu}>&#9776; </span>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#service">Services</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <span className="menu" onClick={openMenu}>&#9776; PORTFOLIO</span>
        </>
    )
}

export default Navigation
