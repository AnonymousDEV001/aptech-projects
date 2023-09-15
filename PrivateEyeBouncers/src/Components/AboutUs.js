import React from "react";
import AboutCss from "./css/About.module.css";
import indexCss from '../index.module.css'
import { Link } from "react-router-dom";


export default function AboutUs() {
  return (
    <div className={AboutCss.aboutUsContainer}>
      <div className={AboutCss.aboutUsDesign}>
        <img src="vector.svg" />
      </div>
      <div className={AboutCss.aboutUs}>
        <div className={AboutCss.teamImage}>
          <img
            loading="lazy"
            src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/359145511_749572166964358_5545311690107454206_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=5XF8GAIiRYUAX_jHY88&_nc_ht=scontent.fisb5-1.fna&oh=00_AfC6xrRvEYdFLiPkJQa4_rxUZAdZr3vLYa-L3hMQN0dMww&oe=650453E4"
          />
        </div>
        <div className={AboutCss.aboutUsText}>
          <h3 className={indexCss.white}>ABOUT US</h3>
          <p className={indexCss.white}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo...
          </p>
          <Link to={'/about'}>
          <button>Read More</button>
          </Link>
        </div>
      </div>
      <div className={AboutCss.aboutUsDesignFlip}>
        <img src="vector.svg" />
      </div>
    </div>
  );
}
