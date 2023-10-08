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
import UpdateProduct from "./Pages/UpdateProduct";
import { useDispatch, useSelector } from "react-redux";
import { refreshAuth } from "./ReduxStore/Reducers/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    // checking if auth tokens exists if yes then refreshing the token every 4 mins

    try {
    let token = localStorage.getItem("accessToken");
    if (!token) {
      localStorage.setItem("accessToken", JSON.stringify({}));
    }
    if (token && JSON.parse(token).access === undefined) {
      return;
    }
      let interval = setInterval(() => {
        dispatch(
          refreshAuth(JSON.parse(localStorage.getItem("accessToken")).refresh)
        );
      }, 1000 * 60 * 4);

      return () => clearInterval(interval);
    } catch (error) {
      console.log(error.message);
    }
  }, [auth.user]);

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
          <Route exact path="/updateproduct/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
