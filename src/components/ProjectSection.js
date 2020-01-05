import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class ProjectSection extends Component {
  
  render() {
    return (
      <div className="sectionProjects" id="ProjectSection">
        <div className="project-section-title">
              <h5 className="recent-work">
                RECENT WORK
              </h5>
        </div>
       {/* < Multiple Projects /> */}
        <div className="project-grid">
            <Link to="/OlivieriPhoto">
                  <div className="project1">
                    <h5 className="slant">Olivieri<br/>Photo</h5>
                  </div>
            </Link>
                
            <Link to="/Passionate">
                  <div className="project2">
                    <h5>Uniq<br></br>Tee</h5>
                  </div>
            </Link>
                
            <Link to="/SkateSpot">
                  <div className="project3">
                    <h5>Skate<br></br>Spots</h5>
                  </div>
            </Link> 
          </div> 
      </div>
    )
  }
}

