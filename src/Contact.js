import React from 'react'
import './Contact.css';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import { Button, TextField } from '@material-ui/core';
import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_8wzgfil', 'template_6jls6fa', e.target, 'user_k5jRohEpDGqYh7fbJl1nU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <div id="contact">
            <h1 className="contact__title">Contact Me</h1>
            <div className="Container">
                <div className="my_image">
                            
                </div>
                <div className="details">
                    
                    <div className="box">
                        <div className="icon"><HomeIcon /></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>No 160, <br/>Training College Road,<br/>Paththalagedara,<br/>Veyangoda.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><PhoneIphoneIcon /></div>
                        <div className="text">
                            <h3>Mobile Number</h3>
                            <p>076 8517933</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><EmailIcon /></div>
                        <div className="text">
                            <h3>E mail</h3>
                            <p>pamuduprabathiya28@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div className="title"><h3>Send Messages</h3> </div>
                    <form onSubmit={sendEmail}>
                        <div className="field"><TextField id="standard-basic" label="Name" fullWidth="true" name="name" required/></div><br/>
                        <div className="field"><TextField id="standard-basic" label="E-mail" fullWidth="true" name="email" required/></div><br/>
                        <div className="field"><TextField id="standard-basic" label="Message" fullWidth="true" multiline="true" name="message" required/></div><br/>
                        <Button className="ui-button" type="submit" variant="contained" color="secondary">Send</Button>
                    </form>
                </div>
                
            </div>
            <footer>
                    <p>&copy; Copyright 2021. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Contact
