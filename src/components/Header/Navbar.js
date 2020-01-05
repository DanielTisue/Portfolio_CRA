import React, { useState, useRef } from "react";
import { useOnClickOutside } from '../../hooks';
// import { Link } from "react-scroll";
import Burger from '../Burger';
import Menu from '../Menu';


function Navbar() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <div className="nav-brand">
            <Link
              activeClass="active"
              to="sectionMain"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <i class="fas fa-arrow-circle-up fa-2x"><p>TOP</p></i>
            </Link>
          </div> */}
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div> 
        </div>     
      </nav>
    );
  }



export default Navbar;