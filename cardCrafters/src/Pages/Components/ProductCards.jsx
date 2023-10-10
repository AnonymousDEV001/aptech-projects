import React, { useEffect, useState } from "react";
import productCardsCss from "./Css/ProductCards.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import {
  fetchProducts,
  productIdChange,
} from "../../ReduxStore/Reducers/productSlice";
import { Link } from "react-router-dom";

function ProductCards() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.productFetch);
  const [products, setProducts] = useState([]);
  const [colums, setColums] = useState([]);
  const productShow = state.productShow;

  useEffect(() => {
    if (state.productDetails.products === null) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    if (state.productDetails.products !== null) {
      // filtering products by category
      if (productShow !== "All") {
        let newProducts = state.productDetails.products.filter(
          (product) => product.Catagory === productShow
        );
        return setProducts(newProducts);
      }
      // calculating colums
      let length = 0;
      if (state.productDetails.products.length > 4) {
        length = 4;
      }
      if (state.productDetails.products.length < 4) {
        length = state.productDetails.products.length;
      }
      const array = [];
      Array.from(Array(length)).forEach((_, index) => {
        array.push(index);
      });

      setColums(array);

      //showig all products
      setProducts(state.productDetails.products);
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
        <div className={productCardsCss.buttons}>
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
          {state.productDetails.loading && <Loading />}
          {state.productDetails.errors !== "" && (
            <h3 style={{ textAlign: "center", width: "100%" }}>
              Something Went Wrong
            </h3>
          )}
          {products &&
            colums.map((product, index) => {
              const startingIndex = (products.length / colums.length) * index;
              const endingIndex =
                (products.length / colums.length) * (index + 1);

              let columnProducts = products.slice(startingIndex, endingIndex);
              return (
                <div key={index} className={productCardsCss.column}>
                  <div className={productCardsCss.imageContainer}>
                    {columnProducts.map((nextProduct) => (
                      <Link
                        key={nextProduct.id}
                        to={`/product/${nextProduct.id}`}
                      >
                        <img src={nextProduct.ImageUrl} />
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
