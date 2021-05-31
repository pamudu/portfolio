import React from 'react'
import './Services.css';
import Lottie from 'react-lottie';
import * as code from './image/code.json';
import * as web from './image/web.json';
import * as phone from './image/phone.json';
import * as java from './image/java.json';
import * as php from './image/php.json';
import * as neew from './image/new.json';

function Services() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: code.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions_2 = {
        loop: true,
        autoplay: true, 
        animationData: web.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions_3 = {
        loop: true,
        autoplay: true, 
        animationData: phone.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions_4 = {
        loop: true,
        autoplay: true, 
        animationData: java.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions_5 = {
        loop: true,
        autoplay: true, 
        animationData: php.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions_6 = {
        loop: true,
        autoplay: true, 
        animationData: neew.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div id="services">
            <h1 className="services__tile">Services</h1>
            <div className="services__firstrow">
                <div className="card">
                    <div className="ani_container"><Lottie options={defaultOptions} height={150} width={150} /></div>
                    <h3 className="card__title">Java Development</h3>
                    <p className="card__description">Develop Java based application by following object oriented programming</p>
                </div>
                <div className="card">
                    <div className="ani_container"><Lottie options={defaultOptions_2} height={130} width={150} /></div>
                    <h3 className="card__title">Database Management</h3>
                    <p className="card__description">Organize, store and retrieve data from both MySQL and NoSQL databases.</p>
                </div>
                <div className="card">
                    <div className="ani_container"><Lottie options={defaultOptions_3} height={200} width={150} /></div>
                    <h3 className="card__title">Client-server Architecture</h3>
                    <p className="card__description">Establish the connection between client and server and transfer data.</p>
                </div>
            
                <div className="card">
                        <div className="ani_container"><Lottie options={defaultOptions_4} height={150} width={200} /></div>
                        <h3 className="card__title">PHP development</h3>
                        <p className="card__description">Develop server-side web application logic for static or dyanamic web sites.</p>
                    </div>
                    <div className="card">
                        <div className="ani_container"><Lottie options={defaultOptions_5} height={150} width={200} /></div>
                        <h3 className="card__title">Web Development</h3>
                        <p className="card__description">Design and develop Web applications using React or Angular frameworks.</p>
                    </div>
                    <div className="card">
                        <div className="ani_container"><Lottie options={defaultOptions_6} height={150} width={200} /></div>
                        <h3 className="card__title">Python Development</h3>
                        <p className="card__description">Develop Python based application by following object oriented programming.</p>
                    </div>
            </div>
        </div>
    )
}

export default Services
