import React from "react";
import ChoosingCardCss from "./Css/ChoosingCard.module.css";

function ChoosingCard(props) {
  return (
    <div class={ChoosingCardCss.ccard}>
      <div class={ChoosingCardCss.cardText}>
        <h3 class="active">{props.heading}</h3>
        <p>{props.paragraph}</p>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
}

export default ChoosingCard;
