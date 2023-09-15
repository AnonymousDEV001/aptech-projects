import React from 'react'
import servicesPageCss from "./css/ServicesPage.module.css";
import aboutPageCss from "./css/AboutPage.module.css";

export default function SmallHero(props) {
  return (
    <div style={{backgroundImage:`url('${props.img}')`}} className={servicesPageCss.pageBg}>
    <div className={aboutPageCss.bgShade}>
      <h3>{props.heading}</h3>
      <div className={aboutPageCss.line}></div>
    </div>
  </div>
  )
}
