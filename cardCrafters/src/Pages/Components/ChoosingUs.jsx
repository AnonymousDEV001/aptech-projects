import React from "react";
import ChoosingUsCss from "./Css/ChoosingUs.module.css";
import EventsCss from "./Css/Events.module.css";
import ChoosingCard from "./ChoosingCard";

function ChoosingUs() {
  return (
    <div
      class={`${ChoosingUsCss.chooseUs} flex center column ${EventsCss.eventsHeading}`}
    >
      <h3 class="active">Why Choose Us</h3>
      <div class="chosingCards">
        <ChoosingCard
          heading="Wide Selection"
          paragraph="From birthdays to weddings, holidays to milestones, find the perfect card for every event."
          img="EVENT.jpg"
        />
        <ChoosingCard
          heading="Fast Shipping"
          paragraph="Receive your cards quickly so you can share your warm wishes on
            time."
          img="delivery.jpeg"
        />
        <ChoosingCard
          heading="Customer Care"
          paragraph="Our dedicated team is here to assist you every step of the way."
          img="customer.jpeg"
        />
      </div>
    </div>
  );
}

export default ChoosingUs;
