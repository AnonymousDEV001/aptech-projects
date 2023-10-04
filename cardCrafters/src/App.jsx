import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Sigin from "./Pages/Sigin";
import Dashboard from "./Pages/Dashboard";
import AddingImage from "./Pages/AddingImage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/signin" element={<Sigin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addimage" element={<AddingImage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
