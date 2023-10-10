import React, { useEffect, useState } from "react";
import StatisticsCss from "./Css/Statistics.module.css";
import { useSelector } from "react-redux";

function Statistics() {

  const usersMessages = useSelector((state) => state.dashboard.usersMessages);
  const products = useSelector((state) => state.productFetch.productDetails.products);

  const [details, setDetails] = useState({
    totalMessages: 0,
    totalImages: 0,
  });

  useEffect(() => {
    if (usersMessages !== null && products !== null) {
      setDetails({
        totalMessages: usersMessages.length,
        totalImages: products.length,
      });
    }
  }, [usersMessages, products]);

  return (
    <div className="flex center">
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
          <p>Total Products</p>
          <p>{details.totalImages}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Statistics;
