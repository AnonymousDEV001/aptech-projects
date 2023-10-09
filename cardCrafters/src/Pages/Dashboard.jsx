import React, { useEffect,useRef } from "react";
import Navbar from "./Components/Navbar";
import DashboardSection from "./Components/DashboardSection";
import Statistics from "./Components/Statistics";
import Images from "./Components/Images";
import MessagesSection from "./Components/MessagesSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersMessages } from "../ReduxStore/Reducers/dashboardSlice";
import { fetchProducts } from "../ReduxStore/Reducers/productSlice";
import { Navigate } from "react-router-dom";

function Dashboard() {
  
  let fade = useRef();
  useEffect(() => {
    scrollTo(0,0)
    // Using setTimeout to apply opacity change after a short delay
    setTimeout(() => {
      fade.current.style.opacity = "1";
    }, 100); // Adjust the delay as needed
  }, []);

  const dispatch = useDispatch();
  const usersMessages = useSelector((state) => state.dashboard.usersMessages);
  const products = useSelector(
    (state) => state.productFetch.productDetails.products
  );

  const auth = useSelector((state) => state.auth.user);
  useEffect(() => {
    try {
      if (usersMessages === null && auth !== null) {
        dispatch(fetchUsersMessages(auth.access));
      }

      if (products === null) {
        dispatch(fetchProducts());
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [auth]);

  //navigating if token does not exist
  const authToken = localStorage.getItem("accessToken");
  if (authToken && JSON.parse(authToken).access === undefined) {
    return <Navigate to={"/"} />;
  }

  return (
    <div style={{ opacity: "0", transition: "all 1.5s" }} ref={fade}>
      <Navbar />
      <DashboardSection />
      <Statistics />
      <Images />
      <MessagesSection />
    </div>
  );
}

export default Dashboard;
