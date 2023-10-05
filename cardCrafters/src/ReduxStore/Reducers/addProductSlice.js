import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  specifications: [],
  additionalFeatures: [],
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    addAndUpdateSpecifications:(state,action)=>{
      state.specifications = action.payload
    },
    addAndUpdateAdditionalFeatures:(state,action)=>{
      state.additionalFeatures = action.payload
    },
    addSpecifications: (state, action) => {
      const specification = {
        id: nanoid(),
        value: action.payload,
      };
      state.specifications.push(specification);
    },
    removeSpecifications: (state, action) => {
      let newArray = state.specifications.filter(
        (specification) => specification.id !== action.payload
      );
      state.specifications = newArray;
    },
    updateSpecifications: (state, action) => {
      state.specifications = state.specifications.map((specification) =>
        specification.id === action.payload.id
          ? { ...specification, value: action.payload.value }
          : specification
      );
    },
    cleanSpecifications:(state,action)=>{
      state.specifications = action.payload
    },
    cleanAdditionalFeatures:(state,action)=>{
      state.additionalFeatures = action.payload
    },
    addAdditionalFeature: (state, action) => {
      const specification = {
        id: nanoid(),
        value: action.payload,
      };
      state.additionalFeatures.push(specification);
    },
    removeAdditionalFeature: (state, action) => {
      let newArray = state.specifications.filter(
        (specification) => specification.id !== action.payload
      );
      state.additionalFeatures = newArray;
    },
    updateAdditionalFeature: (state, action) => {
      state.additionalFeatures = state.additionalFeatures.map((feature) =>
        feature.id === action.payload.id
          ? { ...feature, value: action.payload.value }
          : feature
      );
    },
  },
});
export const { addSpecifications, removeSpecifications, updateSpecifications,addAdditionalFeature,removeAdditionalFeature,updateAdditionalFeature,cleanSpecifications,cleanAdditionalFeatures,addAndUpdateSpecifications,addAndUpdateAdditionalFeatures } =
  addProductSlice.actions;

export default addProductSlice.reducer;
