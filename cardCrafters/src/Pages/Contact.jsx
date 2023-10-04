import React, { useRef, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Hero from "./Components/Hero";

function Contact() {
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
          heading="Contact Us"
          para="We're thrilled to hear from you! Whether you have a question about our cards, need assistance with an order, or just want to say hello, we're here to help."
        />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
