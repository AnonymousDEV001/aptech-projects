import "./App.css";
import AboutUs from "./Components/AboutUs";
import ChoosingUs from "./Components/ChoosingUs";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import Testimonial from "./Components/Testimonial";
import ServicesPage from "./Components/ServicesPage";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Services />
                <ChoosingUs />
                <AboutUs />
                <Testimonial/>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            exact path="about"
            element={
              <>
              <Navbar/>
              <AboutPage/>
              <Testimonial/>
              <Footer/>
              </>
            }
            />
          <Route
            exact path="services"
            element={
              <>
              <Navbar/>
              <ServicesPage/>
            <Testimonial/>
              <Footer/>
              </>
            }
          />
          <Route
            exact path="contact"
            element={
              <>
              <Navbar/>
            <ContactPage/>
              <Footer/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
