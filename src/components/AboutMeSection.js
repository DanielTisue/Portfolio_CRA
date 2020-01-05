import React, { Component } from 'react';

export default class AboutMeSection extends Component {
  render() {
    return (
      <div className="sectionAboutMe" id="AboutMeSection">
          <div className="aboutMe-section-title">
            <h5 className="about-me">ABOUT ME</h5>
          </div>

          <p className="paragraph">
            Hi, i'm <span>Daniel</span>. I'm a freelance <span>Web Designer and Developer</span>. I have over 2yrs of development experience with that last year specifically focusing on design. There is nothing more satisfying than being able to effectively capture and display a clients creative vision. For me, <span>Web Design is about the feeling the user gets after they leave the page</span>.
            </p>
        </div> 
    )
  }
}