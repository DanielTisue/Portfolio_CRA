import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';



export default class ContactMeSection extends Component {
  render() {
    return (
    <div className="sectionContactMe" id="ContactMeSection">

          <div className="contactMe-section-title">
            <h5 className="about-me">CONTACT ME</h5>
          </div>
          
        
          <ContactForm />
       
          
        <div className="icons">
          <a href="https://www.linkedin.com/in/daniel-tisue-7189b2126/" className="icon-spacing"><i className="fab fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/DanielTisue" className="icon-spacing"><i className="fab fa-github-square fa-2x"></i></a>
        </div>
        
         
      </div>
     
      
    )
  }
}