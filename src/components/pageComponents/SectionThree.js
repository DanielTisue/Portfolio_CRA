import React, { Component } from 'react'
import image from '../../styles/img/designecologist-Pmh0UoG1vlE-unsplash.jpg';


export default class SectionThree extends Component {
  render() {
    return (
      <div className="section-grid-one">
        <div className="section-title center">
          <h5>Title</h5>
        </div>

        <div className="section-wrapper">
          <div clasName="section-image">
            <img src={image} alt="test" />
          </div>
          <div className="section-text">
            <p>LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsunm LoremIpsun mLoremIpsunm LoremIpsunmLore mIpsunmLoremIpsunmL oremIpsunmLoremIpsunmLor emIpsunmLo remI psunmLo remIpsunmLoremI psunmLoremIpsun mL oremIps unmLoremIpsunm LoremIp sunm LoremIp sunmLoremIpsun mLoremIps unmLo remIps unmLore mIpsunmL oremIpsun mLoremI psunm</p>
          </div>
        </div>

      </div>
    )
  }
}