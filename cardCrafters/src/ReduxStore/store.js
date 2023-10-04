import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice";

export const store = configureStore({
  reducer: {
    productFetch : productSlice,
  },
});
