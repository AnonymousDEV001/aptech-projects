import React, { useState, useRef } from "react";
import NavbarCss from "./Css/Navbar.module.css";
import { Link,useLocation } from "react-router-dom";
import logo from '../../../public/logo.svg'
import flower1 from '../../../public/flower1.svg'

function Navbar() {
  let location = useLocation()
  let [dropdown, setDropdownn] = useState(false);
  let refDropdown = useRef();

  const handleDropdown = () => {
    if (dropdown) {
      setTimeout(() => {
      setDropdownn(false);
    }, 200)
        refDropdown.current.style.display = "none";
    } else {
      refDropdown.current.style.display = "block";

      setTimeout(() => {
        setDropdownn(true);
      }, 150);
    }
  };

  return (
    <nav className={NavbarCss.navigation}>
      <Link className="flex center" to={'/'}>
      <div className={`flex center ${NavbarCss.logo}`}>
        <img src={logo} alt="" />
        <p>Card Crafters</p>
      </div>
      </Link>
      <div style={location.pathname == "/dashboard"?{display:"none"}:{}} className={`${NavbarCss.links} flex center column}`}>
        <ul className={`flex center`}>
          <Link to={'/'}><li className={`active`}>Home</li></Link>
          <div className="flex center linksInner">
            <li onClick={handleDropdown}>Pages</li>
            <div
              ref={refDropdown}
              style={dropdown ? { opacity: "1" } : { opacity: "0" }}
              className={NavbarCss.dropdown}
            >
              <Link to={'/products'}><li>Products</li></Link>
              <Link to={'/about'}><li>About Us</li></Link>
              <Link to={'/contact'}><li>Contact Us</li></Link>
            </div>
          </div>
        </ul>
      </div>
      <div style={location.pathname == "/dashboard"?{display:"none"}:{}} className={`${NavbarCss.flower1}`}>
        <img src={flower1} alt="" />
      </div>
      <div className="blank"></div>
    </nav>
  );
}

export default Navbar;
