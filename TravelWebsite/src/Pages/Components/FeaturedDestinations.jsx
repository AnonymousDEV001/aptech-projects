import React from "react";
import fDCss from "../Css/FeaturedDestinations.module.css";
import Heading from "./Heading";

function FeaturedDestinations() {
  return (
    <div className={fDCss.featuredDestinations}>
      <Heading heading={"Feaduted Destinations"} bHeading = {"FEATURED DESTINATIONS"}/>
      <div className={fDCss.destinations}>
        <div className={fDCss.destination}>
          <span class="material-symbols-outlined font-size-5">hiking</span>
          <span>Himalayan Heights in Hunza</span>
          <span>
            Embark on a journey to Hunza, a realm of majestic mountains,
            crystal-clear lakes, and warm-hearted locals. Witness the splendor
            of Rakaposhi, Ultar Sar, and the iconic Baltit Fort.
          </span>
        </div>
        <div className={fDCss.destination}>
          <span class="material-symbols-outlined font-size-5">menu_book</span>
          <span>Cultural Odyssey in Lahore</span>
          <span>
            Immerse yourself in the vibrant culture of Lahore, where Mughal
            architecture and delectable street food converge. Visit the Lahore
            Fort, Badshahi Mosque, and stroll through the historic streets of
            the Walled City.
          </span>
        </div>
        <div className={fDCss.destination}>
          <span class="material-symbols-outlined font-size-5">eco</span>
          <span>Desert Oases and Coastal Charms</span>
          <span>
            Experience the mystique of the Cholistan Desert, a realm of golden
            sands and ancient forts. Explore the Derawar Fort, witness the
            annual Cholistan Jeep Rally, and camp under the starlit desert sky.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedDestinations;
