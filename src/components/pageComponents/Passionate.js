import React, { Component } from 'react'
import NavbarSecondary from '../Header/NavbarSecondary'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'


export default class Passionate extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="recent-work-page">
        <NavbarSecondary />
        <div className="center title-text">
          <h1>Passionate SK8 VIE</h1>
        </div>
        <div className="summary-text center">
          <p>
            This is where the project summary will go.
            
              LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsun mLoremIpsunm LoremIpsunmLore mIpsunmLoremIpsunmL oremIpsunmLoremIpsunmLor emIpsunmLo remI psunmLo remIpsunmLoremI psunmLoremIpsun mL oremIps unmLoremIpsunm LoremIp sunm LoremIp sunmLoremIpsun mLoremIps unmLo remIps unmLore mIpsunmL oremIpsun mLoremI psunm
          </p>
        </div>
        
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    )
  }
}
