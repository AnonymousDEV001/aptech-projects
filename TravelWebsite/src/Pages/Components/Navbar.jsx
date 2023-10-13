import React from "react";
import NavCss from "../Css/Navbar.module.css";
import logo from "../../assets/Frame.svg";

function Navbar() {
  return (
    <div className={NavCss.container}>
      <div className={NavCss.logo}>
        <img src={logo} alt="Wander Ways logo" />
        <p>Wander Ways</p>
      </div>

      <div className={NavCss.links}>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>OFFERS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
