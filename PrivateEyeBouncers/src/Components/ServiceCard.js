import React from 'react'
import ServiceCardCss from "./css/ServiceCard.module.css"

export default function ServiceCard(props) {
  return (
    <div className={ServiceCardCss.serviceCard}>
    <img loading='lazy' src={props.img}/>
    <div className={ServiceCardCss.serviceCardText}>
    <h3>
    {props.heading}
    </h3>
    <p className='grey'>Tincidunt ut nulla turpis pulvinar sed proin metus, ligula nullam enim, sit ante sodales aliquet.</p>
    </div>
</div>
  )
}
