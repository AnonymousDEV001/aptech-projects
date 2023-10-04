import React, { useEffect, useState } from "react";
import StatisticsCss from "./Css/Statistics.module.css";
import { useSelector } from "react-redux";

function Statistics() {
  const state = useSelector((state) => state);

  const [details, setDetails] = useState({
    totalMessages: 0,
    totalImages: 0,
  });

  useEffect(() => {
    if (state.dashboard.usersMessages !== null && state.productFetch.productDetails.products !== null) {
      setDetails({
        totalMessages: state.dashboard.usersMessages.length,
        totalImages: state.productFetch.productDetails.products.length,
      });
    }
  }, [state.dashboard.usersMessages, state.productFetch.productDetails.products]);

  return (
    <div className={`${StatisticsCss.heading}`}>
      <h3 className={`active`}>Statistics</h3>
      <div className={StatisticsCss.cards}>
        <div className={StatisticsCss.card}>
          <p>Total Views</p>
          <p>16</p>
        </div>
        <div className={StatisticsCss.card}>
          <p>Total Messages</p>
          <p>{details.totalMessages}</p>
        </div>
        <div className={StatisticsCss.card}>
          <p>Total Images</p>
          <p>{details.totalImages}</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
