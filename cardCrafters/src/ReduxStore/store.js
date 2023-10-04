import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice";
import dashboardSlice from "./Reducers/dashboardSlice";
import addProductSlice from "./Reducers/addProductSlice";

export const store = configureStore({
  reducer: {
    productFetch : productSlice,
    dashboard:dashboardSlice,
    addProduct: addProductSlice,
  },
});
