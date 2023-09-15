import React from 'react'
import indexCss from "../index.module.css";
import contactPageCss from "./css/ContactPage.module.css";

export default function DetailsCard(props) {
  return (
    <div className={contactPageCss.contactDetailsCard}>
    <div
      className={`${contactPageCss.detailsHeading} ${indexCss.column} ${indexCss.font3span}`}
    >
      <span class={indexCss.materialSymbolsOutlined}>{props.icon}</span>
      <p>{props.heading}</p>
    </div>
    <div className={contactPageCss.details}>
      <p>{props.details}</p>
    </div>
  </div>
  )
}
