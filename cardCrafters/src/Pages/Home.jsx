import React, { useEffect, useRef } from "react";
import ChoosingUs from "./Components/ChoosingUs";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import JoinCommunity from "./Components/JoinCommunity";
import Navbar from "./Components/Navbar";
import Promises from "./Components/Promises";

function Home() {
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
        <Hero />
      </div>
      <Promises />
      <Events />
      <ChoosingUs />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default Home;
