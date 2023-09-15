import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceCardCss from "./css/Services.module.css";

export default function Services() {
  return (
    <div className={ServiceCardCss.services}>
      <div className="heading">
        <h2>Our Offered Services</h2>
        <p className="grey">Who are extremly love with eco friendly system.</p>
      </div>
      <div className={ServiceCardCss.serviceCards}>
        <ServiceCard
          img="https://static.professional-electrician.com/professional-electrician/uploads/2022/06/DoorBird.jpg"
          heading="Access Solutions"
        />
        <ServiceCard
          img="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Alarm Systems"
        />
        <ServiceCard
          img="https://images.jdmagicbox.com/quickquotes/images_main/Single-YBS-Wall-Mounted-Emergency-Alarm-Size-90m-343891731-h7fxu.jpg"
          heading="Buzzers"
        />
        <ServiceCard heading="Security Cameras" img="cameras.jpeg" />
          <ServiceCard heading="Intercom Services" img="https://websitedemos.net/security-services-02/wp-content/uploads/sites/839/2021/05/security-service-service-5.jpg"/>
        <ServiceCard
          heading="Locksmith Services"
          img="https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
        />
      </div>
    </div>
  );
}
