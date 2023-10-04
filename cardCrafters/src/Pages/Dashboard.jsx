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
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.dashboard.usersMessages === null) {
      dispatch(fetchUsersMessages());
    }
    if (state.productFetch.productDetails.products === null) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

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
