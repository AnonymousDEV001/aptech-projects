import React, { useEffect } from "react";
import AddingImage from "./AddingImage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ReduxStore/Reducers/productSlice";

function UpdateProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productFetch.productDetails.products);
  useEffect(() => {
    if (products === null) {
      dispatch(fetchProducts());
    }
  }, []);
  return <AddingImage />;
}

export default UpdateProduct;
