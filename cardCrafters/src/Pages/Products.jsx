import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductCards from "./Components/ProductCards";
import Footer from "./Components/Footer";

function Products() {


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
          heading="Products"
          para="Welcome to our curated collection of handcrafted cards. Each card is a testament to our dedication to creativity, quality, and heartfelt expression. Whether you're looking for the perfect birthday card, a touching anniversary message, or a festive holiday greeting, you'll find it here. Explore our selection below and discover the art of meaningful connections through beautifully crafted cards."
        />
      </div>
      <div className="flex center column">
      <ProductCards />      
      </div>
      <Footer />
    </div>
  );
}

export default Products;
