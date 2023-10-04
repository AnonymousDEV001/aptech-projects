import React from "react";
import HeroCss from "./Css/Hero.module.css";
import { useLocation } from "react-router-dom";

function Hero(props) {

  let location = useLocation()

  if(location.pathname === "/") return (
    <div class={`${HeroCss.heroText} flex center`}>
      <div class={`${HeroCss.left} flex justify column`}>
        <h3>Welcome to CardCrafters</h3>
        <p class="my1">Where Creativity Meets Greetings</p>
        <p class="active">
          Discover a world of exquisite handcrafted cards that are perfect for
          every occasion.
        </p>
      </div>
      <div class={HeroCss.right}></div>
      <div class={HeroCss.imgs}>
        <img src="bg1.jpeg" alt="" />
        <img src="bg2.jpeg" alt="" />
        <img src="bg3.jpeg" alt="" />
      </div>
    </div>
  );
  if(location.pathname === "/contact" || "/about") return (
    <div style={{width:"100%",margin:'0',textAlign:"center"}} class={`${HeroCss.left} flex center column`}>
      <h3 className="active">{props.heading}</h3>
      <p style={{width:"70%"}}>{props.para}</p>
    </div>
  )
}

export default Hero;
