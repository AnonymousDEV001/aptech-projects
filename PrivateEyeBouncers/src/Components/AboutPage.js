import React, { useEffect } from "react";
import aboutPageCss from "./css/AboutPage.module.css";
import SmallHero from "./SmallHero";
import TeamCard from "./TeamCard";

export default function AboutPage() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className={aboutPageCss.aboutPage}>
      <SmallHero img="about.jpeg" heading="ABOUT US"/>
      <div className={aboutPageCss.trustTextContainer}>
        <h3>Your Trusted Security Partner</h3>
        <p>
          A, ullamcorper purus vivamus faucibus id vitae sit pellentesque nam
          adipiscing in feugiat dictum ligula neque, nibh dui etiam vitae at
          felis vestibulum, leo sagittis accumsan, amet gravida nisl lacus,
          tincidunt morbi proin faucibus elit nunc varius risus, vulputate nibh
          venenatis id sed feugiat sodales sollicitudin nisl.
        </p>
      </div>
      <div className={aboutPageCss.teamContainer}>
        <TeamCard  img="cameras.jpeg" heading="Security Solutions"/>
        <TeamCard  img="landing-bg.webp" heading="About Team"/>
      </div>
    </div>
  );
}
