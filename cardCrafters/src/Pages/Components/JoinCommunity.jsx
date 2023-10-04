import React from "react";
import JoinCommunityCss from "./Css/JoinCommunity.module.css"

function JoinCommunity() {
  return (
    <div class={`${JoinCommunityCss.joinUS} flex`}>
      <div class={`${JoinCommunityCss.joinleft} flex column`}>
        <h3 class="active">Join Our Community</h3>
        <p>
          Become a part of the CardCrafters community and be the first to know
          about our latest designs, exclusive offers, and crafting tips.
        </p>
        <p>
          Explore our collection now and make every greeting a cherished memory.
        </p>
        <div class={JoinCommunityCss.socialLogos}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div></div>
      <div class={`${JoinCommunityCss.joinRight} flex center`}>
        <img src="Anniversaries.jpg" alt="" />
        <img src="customer.jpeg" alt="" />
        <img src="Graduations.jpg" alt="" />
      </div>
    </div>
  );
}

export default JoinCommunity;
