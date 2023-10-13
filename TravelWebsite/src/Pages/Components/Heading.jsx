import React from 'react'
import HeadingCss from '../Css/Heading.module.css'

function Heading(props) {
  return (
    <div className={HeadingCss.destinationHeading}>
    <span>{props.bHeading}</span>
    <h3>{props.heading}</h3>
  </div>
  )
}

export default Heading
