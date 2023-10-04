import React from "react";
import EventCards from "./EventCards";
import EventsCss from "./Css/Events.module.css";
import { useDispatch } from "react-redux";
import { productIdChange } from "../../ReduxStore/Reducers/productSlice";
import { Link } from "react-router-dom";

function Events() {
  const dispatch = useDispatch();

  return (
    <div class={`${EventsCss.events} flex center column`}>
      <div class={`${EventsCss.eventsHeading} flex center column`}>
        <h3 class="active">Explore Our Collection by Event</h3>
        <p>
          Browse our extensive selection of cards, categorized by a wide range
          of events including:
        </p>
      </div>
      <div class={`${EventsCss.eventCards}`}>
        <Link
          to={"/products"}
          onClick={() => {
            dispatch(productIdChange("Birthdays"));
          }}
        >
          <EventCards img="birthday.jpg" heading="Birthdays" />
        </Link>
        <Link
          to={"/products"}
          onClick={() => {
            dispatch(productIdChange("Weaddings"));
          }}
        >
          <EventCards img="Weaddings.jpg" heading="Weaddings" />
        </Link>
        <Link
          to={"/products"}
          onClick={() => {
            dispatch(productIdChange("Holidays"));
          }}
        >
          <EventCards img="Holidays.jpg" heading="Holidays" />
        </Link>
        <Link
          to={"/products"}
          onClick={() => {
            dispatch(productIdChange("Anniversaries"));
          }}
        >
          <EventCards img="Anniversaries.jpg" heading="Anniversaries" />
        </Link>
        <Link
          to={"/products"}
          onClick={() => {
            dispatch(productIdChange("Graduations"));
          }}
        >
          <EventCards img="Graduations.jpg" heading="Graduations" />
        </Link>
        <Link
          to={"/products"}
          onClick={() => {
            dispatch(productIdChange("Thank You"));
          }}
        >
          <EventCards img="ThankYou.jpg" heading="Thank You" />
        </Link>
      </div>
    </div>
  );
}

export default Events;
