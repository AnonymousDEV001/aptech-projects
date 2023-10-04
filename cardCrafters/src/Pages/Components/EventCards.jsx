import React from 'react'
import EventCardsCss from "./Css/EventCard.module.css"

function EventCards(props) {
  return (
    <div class={EventCardsCss.eventCard}>
    <img loading='lazy' src={props.img} alt="" />
    <p>{props.heading}</p>
  </div>
  )
}

export default EventCards
