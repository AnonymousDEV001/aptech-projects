import React from "react";
import FooterCss from "./css/Footer.module.css";
import indexCss from "../index.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={FooterCss.footer}>
      <div className={FooterCss.items}>
        <div className={FooterCss.item}>
          <div className={FooterCss.logo}>
            <img src="logo.webp" />
            <h3>PRIVATE EYE BOUNCERS</h3>
          </div>
          <div className={FooterCss.text}>
            <p>
              Lacus malesuada id vehicula viverra nisl natoque vitae venenatis
              magna condimentum non suscipit eget.
            </p>
          </div>
          <div className={FooterCss.socialMediaLogos}>
            <img className={indexCss.mr1} src="google.webp" />
            <img
              className={`${indexCss.mr1} ${indexCss.mt1}`}
              src="facebook.webp"
            />
            <img className={indexCss.mr1} src="twitter.webp" />
          </div>
        </div>
        <div className={FooterCss.item}>
          <h3>Services</h3>
          <Link to={"/services"}>
            <p> Access Solutions</p>
          </Link>
          <Link to={"/services"}>
            <p>Alarm Systems</p>
          </Link>
          <Link to={"/services"}>
            <p>Security Cameras</p>
          </Link>
          <Link to={"/services"}>
            <p>Intercom Systems</p>
          </Link>
        </div>
        <div className={FooterCss.item}>
          <h3>Company</h3>
          <Link to={"/about"}>
            <p>About Us</p>
          </Link>
          <Link to={"/contact"}>
            <p>Training</p>
          </Link>
          <Link to={"/contact"}>
            <p>Career</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact Us</p>
          </Link>
        </div>
        <div className={FooterCss.item}>
          <h3>Address</h3>
          <p>1234 5th Ave S, Seattle, WA 5678, United States.</p>
          <p>privateeyebouncers@gmail.com</p>
          <p>+92 316 5546622</p>
        </div>
      </div>
      <div className={FooterCss.copyRight}>
        <p>Copyright © 2023 Security Services</p>
        <p>Powered by Security Services</p>
      </div>
    </div>
  );
}
