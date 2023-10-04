import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const url = "http://127.0.0.1:8000/getproducts/";
  const response = await fetch(url);
  return await response.json();
});

const initialState = {
  productDetails: {
    products: null,
    loading: false,
    errors: "",
  },
  productShow:"All"
};

const productSlice = createSlice({
  name: "productFetch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.productDetails.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productDetails.loading = false;
      state.productDetails.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.productDetails.errors = action.payload;
      state.productDetails.loading = false;
    });
  },
  reducers:{
    productIdChange : (state, action)=>{
        state.productShow = action.payload
    },
  }
});


export const {productIdChange} = productSlice.actions
export default productSlice.reducer;
