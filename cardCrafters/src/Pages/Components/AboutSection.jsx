import React from "react";
import aboutSectionCss from "./Css/AboutSection.module.css";

function AboutSection() {
  return (
    <div>
      <div className={`flex center column ${aboutSectionCss.aboutSection}`}>
        <div className={aboutSectionCss.aboutHeading}>
          <h3 class="active">Our Story</h3>
        </div>
        <div className={aboutSectionCss.story}>
          <p>
            Founded in [Year], CardCraftersHub started as a small passion
            project in our cozy studio. Over time, it blossomed into a platform
            dedicated to offering a curated collection of handcrafted cards for
            every occasion.
          </p>
          <div className={aboutSectionCss.image}>
            <img src="bg1.jpeg" />
          </div>
        </div>
      </div>

      <div className={aboutSectionCss.craftLove}>
        <div className={`${aboutSectionCss.left} flex column`}>
          <h3 class="active">Crafted with Love</h3>
          <p>
            Each card at CardCraftersHub is a labor of love. We meticulously
            choose premium materials, ensuring that every card is a work of art.
            Our team of skilled artisans pour their creativity and attention to
            detail into every design, making sure your sentiments are conveyed
            in the most special way.
          </p>
        </div>
        <div className={aboutSectionCss.right}>
          <img src="bg1.jpeg" />
          <div className={aboutSectionCss.shade}></div>
        </div>
      </div>

      <div className={`flex center column`}>
        <div className={`${aboutSectionCss.commitment}`}>
          <h3 className="active">Our Commitment</h3>
          <p>
            We are committed to providing you with not just cards, but cherished
            memories. We believe in the power of a handwritten note and the
            warmth it brings to both the sender and the recipient. That's why we
            strive to make every card a keepsake-worthy treasure.
          </p>
        </div>
      </div>

      <div className={`${aboutSectionCss.joinCommunity}`}>
        <div className={`${aboutSectionCss.illustration}`}>
          <img src="illustration.png" />
          <div className={`${aboutSectionCss.illustrationText}`}>
            <h3 className="active">Join Our Journey</h3>
            <p>
              Become a part of the CardCraftersHub community and let's spread
              love, one beautifully crafted card at a time. Whether it's
              birthdays, weddings, holidays, or any special moment in between,
              we've got the perfect card waiting for you.
              <br />
              <br />
              <br />
              Thank you for being a part of our story.
              <br />
              <br />
              <br /> With Gratitude,
              <br />
              <br />
              <br /> [Your Name/Founder's Name]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
