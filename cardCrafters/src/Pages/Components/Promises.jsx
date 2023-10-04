import React from "react";
import PromisesCss from './Css/Promises.module.css'

function Promises() {
  return (
    <div class={PromisesCss.promises}>
      <div class={PromisesCss.flower2}>
        <img src="flower2.svg" alt="" />
      </div>
      <div class={`${PromisesCss.promisesTest} ${PromisesCss.pleft} flex column`}>
        <h3>Our Promises to You</h3>
        <ul>
          <li>
            Unique Designs: Each card is a work of art, thoughtfully designed to
            convey your heartfelt sentiments.
          </li>
          <li>
            Quality Materials: We use premium paper and embellishments to ensure
            every card is a keepsake-worthy masterpiece.
          </li>
          <li>
            Personalized Touch: Customize your cards with heartfelt messages and
            names for that extra special touch.
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Promises;
