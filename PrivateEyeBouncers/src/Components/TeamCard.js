import React from 'react'
import aboutPageCss from "./css/AboutPage.module.css";

export default function TeamCard(props) {
  return (
    <div className={aboutPageCss.teamCard}>
    <img src={props.img} />
    <div className={aboutPageCss.teamText}>
      <h3>{props.heading}</h3>
      <p>
        Pellentesque gravida iaculis amet, amet dignissim netus ac eget
        porttitor malesuada quisque habitant mauris, sed vestibulum
        convallis vel dignissim arcu lectus nunc vulputate vitae
        adipiscing amet nisl ultrices quam mattis et blandit amet turpis
        aliquam etiam commodo sit augue nec sociis platea mauris elit
        tempus adipiscing.
      </p>
    </div>
  </div>
  )
}
