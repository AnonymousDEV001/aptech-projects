import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import DashboardSection from "./Components/DashboardSection";
import Statistics from "./Components/Statistics";
import Images from "./Components/Images";
import MessagesSection from "./Components/MessagesSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersMessages } from "../ReduxStore/Reducers/dashboardSlice";
import { fetchProducts } from "../ReduxStore/Reducers/productSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const usersMessages = useSelector((state) => state.dashboard.usersMessages);
  const products = useSelector((state) => state.productFetch.productDetails.products);

  useEffect(() => {
    if (usersMessages === null) {
      dispatch(fetchUsersMessages());
    }
    if (products === null) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <Navbar />
      <DashboardSection />
      <Statistics />
      <Images />
      <MessagesSection />
    </div>
  );
}

export default Dashboard;
