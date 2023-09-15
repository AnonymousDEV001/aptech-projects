import React, { useEffect } from "react";
import servicesPageCss from "./css/ServicesPage.module.css";
import aboutPageCss from "./css/AboutPage.module.css";
import contactPageCss from "./css/ContactPage.module.css";
import TeamCard from "./TeamCard";
import SmallHero from "./SmallHero";
import DetailsCard from "./DetailsCard";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={servicesPageCss.services}>
      <SmallHero img="Untitled.png" heading="SERVICES" />

      <div className={contactPageCss.contactDetails}>
        <DetailsCard
          icon="groups"
          heading="ON SIGHT GUARDING"
          details="      Aliquet proin venenatis eget nec, quisque proin euismod duis nibh
      ullamcorper"
        />
        <DetailsCard
          icon="directions_car"
          heading="MOBILE GUARDING"
          details="      Aliquet proin venenatis eget nec, quisque proin euismod duis nibh
      ullamcorper"
        />
        <DetailsCard
          icon="remote_gen"
          heading="REMOTE GUARDING"
          details="      Aliquet proin venenatis eget nec, quisque proin euismod duis nibh
      ullamcorper"
        />
      </div>
      <div className={aboutPageCss.teamContainer}>
        <TeamCard
          heading="Access Solutions"
          img="https://static.professional-electrician.com/professional-electrician/uploads/2022/06/DoorBird.jpg"
        />
        <TeamCard
          heading="Alarm Systems"
          img="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <TeamCard
          heading="Buzzers"
          img="https://images.jdmagicbox.com/quickquotes/images_main/Single-YBS-Wall-Mounted-Emergency-Alarm-Size-90m-343891731-h7fxu.jpg"
        />
        <TeamCard heading="Security Cameras" img="cameras.jpeg" />
        <TeamCard heading="Intercom Systems" img="https://websitedemos.net/security-services-02/wp-content/uploads/sites/839/2021/05/security-service-service-5.jpg" />

        <TeamCard
          heading="Locksmith Services
"
          img="https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
        />
      </div>
    </div>
  );
}
