import React from "react";
import HeroCss from "../Css/Hero.module.css";

function Hero() {
  return (
    <div className={HeroCss.hero}>
      <div className={HeroCss.left}>
        <div className={HeroCss.heroText}>
          <div className={HeroCss.heroHeading}>
            <h3>Discover Pakistan's Hidden Gems</h3>
            <p>Unveiling the Wonders of the Land of Pure</p>
          </div>
        </div>
        <div className={HeroCss.heroPara}>
          <p>
            Salam Pakistan! Welcome to [Travel Company Name], your gateway to
            the diverse landscapes, rich heritage, and warm hospitality of
            Pakistan. Embark on a journey that takes you from the bustling
            markets of Lahore to the serene valleys of Gilgit-Baltistan, and
            everywhere in between. Get ready for an adventure that promises
            memories to last a lifetime.
          </p>
        </div>
        <div className={HeroCss.callToButton}>
          <button>
            <span class="material-symbols-outlined font-size-2">call</span>
            <span>START EXPLORING PAKISTAN</span>
          </button>
        </div>
      </div>
      <div className={HeroCss.right}></div>
    </div>
  );
}

export default Hero;
