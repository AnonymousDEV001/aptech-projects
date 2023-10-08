import React, { useEffect, useState } from "react";
import productCardsCss from "./Css/ProductCards.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productIdChange,
} from "../../ReduxStore/Reducers/productSlice";
import { Link } from "react-router-dom";

function ProductCards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productFetch);
  const [products, setProducts] = useState([]);
  const productShow = state.productShow;

  useEffect(() => {
    if (state.productDetails.products === null) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    // filtering products by category
    if (state.productDetails.products !== null) {
      if (productShow === "All") {
        return setProducts(state.productDetails.products);
      }
      let newProducts = state.productDetails.products.filter(
        (product) => product.Catagory === productShow
      );
      setProducts(newProducts);
    }
  }, [state, productShow]);

  return (
    <div className={productCardsCss.productCards}>
      <div className={productCardsCss.heading}>
        <h3 className="active">
          Discover Exquisite Handcrafted Cards for Every Occasion
        </h3>
        <p>
          Discover heartfelt, handcrafted cards for every occasion at
          CardCrafters. From birthdays to weddings and expressions of gratitude,
          our meticulously crafted cards convey warmth and sincerity. Explore
          now.
        </p>
      </div>

      <div className={productCardsCss.gallery}>
        <div>
          <button
            style={
              productShow === "All" ? { backgroundColor: "#0085FF" } : null
            }
            onClick={() => {
              dispatch(productIdChange("All"));
            }}
            className={`${productCardsCss.button}`}
          >
            All
          </button>
          <button
            style={
              productShow === "Birthdays"
                ? { backgroundColor: "#0085FF" }
                : null
            }
            onClick={() => {
              dispatch(productIdChange("Birthdays"));
            }}
            className={`${productCardsCss.button}`}
          >
            Birthdays
          </button>
          <button
            style={
              productShow === "Weaddings"
                ? { backgroundColor: "#0085FF" }
                : null
            }
            onClick={() => {
              dispatch(productIdChange("Weaddings"));
            }}
            className={`${productCardsCss.button}`}
          >
            Weaddings
          </button>
          <button
            style={
              productShow === "Holidays" ? { backgroundColor: "#0085FF" } : null
            }
            onClick={() => {
              dispatch(productIdChange("Holidays"));
            }}
            className={`${productCardsCss.button}`}
          >
            Holidays
          </button>
          <button
            style={
              productShow === "Anniversaries"
                ? { backgroundColor: "#0085FF" }
                : null
            }
            onClick={(e) => {
              dispatch(productIdChange("Anniversaries"));
            }}
            className={`${productCardsCss.button}`}
          >
            Anniversaries
          </button>
          <button
            style={
              productShow === "Graduation"
                ? { backgroundColor: "#0085FF" }
                : null
            }
            onClick={() => {
              dispatch(productIdChange("Graduation"));
            }}
            className={`${productCardsCss.button}`}
          >
            Graduations
          </button>
          <button
            style={
              productShow === "Thank You"
                ? { backgroundColor: "#0085FF" }
                : null
            }
            onClick={() => {
              dispatch(productIdChange("Thank You"));
            }}
            className={`${productCardsCss.button}`}
          >
            Thank You
          </button>
        </div>
        <div className={productCardsCss.row}>
          {products &&
            [1, 2, 3, 4].map((product, index) => {
              const startingIndex = (products.length / 4) * index;
              const endingIndex = (products.length / 4) * (index + 1);

              let columnProducts = products.slice(startingIndex, endingIndex);

              return (
                <div className={productCardsCss.column}>
                  <div className={productCardsCss.imageContainer}>
                    {columnProducts.map((nextProduct) => (
                      <Link to={`/product/${nextProduct.id}`}>
                        <img 
                          key={nextProduct.id} // Assuming `nextProduct.id` is unique
                          src={nextProduct.ImageUrl}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
