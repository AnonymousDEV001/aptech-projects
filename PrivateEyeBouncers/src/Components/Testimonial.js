import React from "react";
import testimonialCss from "./css/Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={testimonialCss.testimonial}>
      <div className={testimonialCss.testimonialText}>
        <p>Testimonial</p>
        <h3>What Clients Say</h3>
      </div>
      <div className={testimonialCss.testimonialCards}>
        <div className={testimonialCss.testimonialCard}>
          <div className={testimonialCss.cardText}>
            <img src="//unsplash.it/100/100" />
            <quote>
              "Sapien, volutpat magna erat dolor mi, leo eu sagittis arcu at a
              turpis ipsum eget pellentesque in amet."
            </quote>
            <div className={testimonialCss.clientNames}>
              <p>Saim Abbas</p>
              <span>Chief Accountant</span>
            </div>
          </div>
        </div>
        <div className={testimonialCss.testimonialCard}>
          <div className={testimonialCss.cardText}>
            <img src="//unsplash.it/100/100" />
            <quote>
              "Sapien, volutpat magna erat dolor mi, leo eu sagittis arcu at a
              turpis ipsum eget pellentesque in amet."
            </quote>
            <div className={testimonialCss.clientNames}>
              <p>Saim Abbas</p>
              <span>Chief Accountant</span>
            </div>
          </div>
        </div>
        <div className={testimonialCss.testimonialCard}>
          <div className={testimonialCss.cardText}>
            <img src="//unsplash.it/100/100" />
            <quote>
              "Sapien, volutpat magna erat dolor mi, leo eu sagittis arcu at a
              turpis ipsum eget pellentesque in amet."
            </quote>
            <div className={testimonialCss.clientNames}>
              <p>Saim Abbas</p>
              <span>Chief Accountant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
