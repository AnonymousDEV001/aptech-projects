import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedDestinations from "./Components/FeaturedDestinations";
import PopularDestinations from "./Components/PopularDestinations";

function Home() {
  return (
    <div style={{minHeight:"500vh"}}>
      <Navbar />
      <Hero />
      <FeaturedDestinations/>
      <PopularDestinations/>
    </div>
  );
}

export default Home;
