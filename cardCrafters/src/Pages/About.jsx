import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";

function About() {
  let fade = useRef();
  useEffect(() => {
    // Using setTimeout to apply opacity change after a short delay
    setTimeout(() => {
      fade.current.style.opacity = "1";
    }, 100); // Adjust the delay as needed
  }, []);

  return (
    <div style={{ opacity: "0", transition: "all 1.5s" }} ref={fade}>
      <div className="hero">
        <Navbar />
        <Hero
          heading="About Us"
          para="Welcome to CardCraftersHub, where creativity meets heartfelt expression. We believe that every message deserves to be delivered with a touch of artistry and care. Our journey began with a simple love for crafting and a desire to spread joy through beautifully designed cards."
        />
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default About;
