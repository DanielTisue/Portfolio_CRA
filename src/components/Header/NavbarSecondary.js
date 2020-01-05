import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "../../App.scss"


class NavbarSecondary extends Component {
  
  render() {
    
    return (
      
        <div className="secondary-nav">
          <ul className="nav-links">
            <Link to='/#ProjectSection'>
              <p><i className="fas fa-arrow-circle-left" />
                <span className="link-text">Home</span></p>
            </Link> 
          </ul>
        </div>
    )
  }
}

export default NavbarSecondary;


