import React from 'react';
import Navbar from './Header/Navbar'
import Main from "./Main";
import ProjectSection from "./ProjectSection";
import AboutMeSection from "./AboutMeSection";
import ContactMeSection from "./ContactMeSection";

// import OtherWorkSection from "./OtherWorkSection";

export default function Section({ id }) {

    return (
    <React.Fragment>
          <Navbar />
          <Main id={id} />
          <ProjectSection id={id} />
          <AboutMeSection id={id} />
          <ContactMeSection id={id} />
          {/* <OtherWorkSection id={id} /> */}
    </React.Fragment>
        
    );
  }



