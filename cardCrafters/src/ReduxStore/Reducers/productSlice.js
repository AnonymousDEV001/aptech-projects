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
    //for getting images by catagory
    productIdChange : (state, action)=>{
        state.productShow = action.payload
    },

    //for deleting product from state
    productRemove:(state,action)=>{
      state.productDetails.products = state.productDetails.products.filter((product)=> product.id !== action.payload)
    },
    //for adding product from state
    productAdd:(state,action)=>{
      if(state.productDetails.products !== null){
        state.productDetails.products.push(action.payload)
      }
    },
    //for updating product in state
    productUpdate:(state,action)=>{
      if(state.productDetails.products !== null){
        state.productDetails.products = state.productDetails.products.map((product)=> product.id === action.payload.id ? action.payload.product: product)

      }

    }
  }
});


export const {productIdChange,productRemove,productAdd,productUpdate} = productSlice.actions
export default productSlice.reducer;
