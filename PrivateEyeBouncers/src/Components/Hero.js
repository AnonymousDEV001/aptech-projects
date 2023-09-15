import React,{useEffect} from "react";
import HeroCss from "./css/Hero.module.css";

export default function Hero() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className={HeroCss.hero}>
      <div className={HeroCss.heroBg}>
        <div className={HeroCss.heroContent}>
          <div className={HeroCss.heroText}>
            <p>WE PROVIDE</p>
            <h1>Best Private Security</h1>
            <p>
              Felis etiam pellentesque scelerisque eleifend in aliquam sed morbi
              nisl lectus mi proin ultricies quis bibendum.
            </p>
          </div>
          <div className={HeroCss.heroBlank}></div>
        </div>
      </div>
    </div>
  );
}
