import React, { Component } from 'react';
// import { Link } from "react-scroll";

export default class Main extends Component {
  render() {
    // const arr = [];

    return ( 
    
    <div className="sectionMain" id="sectionMain">
      <div id="overlay">
        <div className="header-section">
          <div className="mainPage-title">
            <h1>DANIEL TISUE</h1>
              <h2>Designer . Developer</h2>
          </div>
          <div className="title-summary-container">
            <p className="title-summary">
             Utilizing design and technology to deliver the best experience possible. 
            </p>
          </div>
          <div className="icons">
              <a href="https://www.linkedin.com/in/daniel-tisue-7189b2126/" className="icon-spacing"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="https://github.com/DanielTisue" className="icon-spacing"><i className="fab fa-github-square fa-2x"></i></a>
          </div>
        </div>
      </div>
    </div>   
    
    )
  }
}

