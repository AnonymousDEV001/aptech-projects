import React from "react";
import Navbar from "./Components/Navbar";
import DashboardSection from "./Components/DashboardSection";
import Statistics from "./Components/Statistics";
import Images from "./Components/Images";
import MessagesSection from "./Components/MessagesSection";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <DashboardSection />
      <Statistics />
      <Images/>
      <MessagesSection/>
    </div>
  );
}

export default Dashboard;
