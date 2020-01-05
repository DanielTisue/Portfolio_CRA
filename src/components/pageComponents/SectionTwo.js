import React, { Component } from 'react'
import image from '../../styles/img/designecologist-Pmh0UoG1vlE-unsplash.jpg';
import './SectionOne.scss'

export default class SectionTwo extends Component {
  render() {
    return (
      
      <div className="section-grid-two">
        <div className="section-title center">
          <h5>Title</h5>
        </div>

        <div className="section-wrapper">
          <div className="section-text">
            <p>LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsun mLoremIpsunm LoremIpsunmLore mIpsunmLoremIpsunmL oremIpsunmLoremIpsunmLor emIpsunmLo remI psunmLo remIpsunmLoremI psunmLoremIpsun mL oremIps unmLoremIpsunm LoremIp sunm LoremIp sunmLoremIpsun mLoremIps unmLo remIps unmLore mIpsunmL oremIpsun mLoremI psunm</p>
          </div>
          <div clasName="section-image">
            <img src={image} alt="test" />
          </div>
        </div>

      </div>
    )
  }
}
