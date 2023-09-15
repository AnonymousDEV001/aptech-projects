import React, { useEffect } from "react";
import contactPageCss from "./css/ContactPage.module.css";
import aboutPageCss from "./css/AboutPage.module.css";
import indexCss from "../index.module.css";
import Contact from "./Contact";
import DetailsCard from "./DetailsCard";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={contactPageCss.contactPage}>
      <div className={contactPageCss.pageBg}>
        <div className={aboutPageCss.bgShade}>
          <h3>CONTACT US</h3>
          <div className={aboutPageCss.line}></div>
        </div>
      </div>
      <Contact />
      <div className={contactPageCss.contactDetails}>
        <DetailsCard
          icon="location_on"
          heading="HEAD OFFICE"
          details="1234 5th Ave S, Seattle, WA 5678, United States."
        />
        <DetailsCard
          icon="mail"
          heading="MAIL"
          details="privateeyebouncers@gmail.com"
        />
        <DetailsCard icon="call" heading="PHONE" details="+92 316 5546622" />
      </div>
      <div className={contactPageCss.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53134.66352899075!2d72.98255324363704!3d33.659326163911544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95906a03cfff%3A0x2b2f1c1c99b676ce!2sInternational%20Islamic%20University%20Islamabad%20(IIUI)!5e0!3m2!1sen!2s!4v1694685277992!5m2!1sen!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
