import React from "react";
import pDCss from "../Css/PopularDestinations.module.css";
import Heading from "./Heading";
function PopularDestinations() {
  return (
    <div className={pDCss.popularDestinations}>
      <Heading
        heading={"PopularDestinations"}
        bHeading={"POPULAR DESTINATIONS"}
      />
      <div className={pDCss.gallary}>
        <div className={`${pDCss.items} ${pDCss.item1}  ${pDCss.itemRow}`}></div>
        <div className={`${pDCss.items} ${pDCss.item2}`}></div>
        <div className={`${pDCss.items} ${pDCss.item3}`}></div>
        <div className={`${pDCss.items} ${pDCss.item4} ${pDCss.itemColumn}`}></div>
      </div>
    </div>
  );
}

export default PopularDestinations;
