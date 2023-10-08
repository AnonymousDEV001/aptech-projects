import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  specifications: [],
  additionalFeatures: [],
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    addAndUpdateSpecifications: (state, action) => {
      state.specifications = action.payload;
    },

    addAndUpdateAdditionalFeatures: (state, action) => {
      state.additionalFeatures = action.payload;
    },

    //for adding new specification object
    addSpecifications: (state, action) => {
      const specification = {
        id: nanoid(),
        value: action.payload,
      };
      state.specifications.push(specification);
    },

    //for removing specification object
    removeSpecifications: (state, action) => {
      let newArray = state.specifications.filter(
        (specification) => specification.id !== action.payload
      );
      state.specifications = newArray;
    },

    //for updating existing specification object
    updateSpecifications: (state, action) => {
      state.specifications = state.specifications.map((specification) =>
        specification.id === action.payload.id
          ? { ...specification, value: action.payload.value }
          : specification
      );
    },

    //for setting specification state to null
    cleanSpecifications: (state, action) => {
      state.specifications = action.payload;
    },

    //for setting additionalFeature state to null
    cleanAdditionalFeatures: (state, action) => {
      state.additionalFeatures = action.payload;
    },

    //for adding new additionalFeature object
    addAdditionalFeature: (state, action) => {
      const specification = {
        id: nanoid(),
        value: action.payload,
      };
      state.additionalFeatures.push(specification);
    },

    //for removing additionalFeature object
    removeAdditionalFeature: (state, action) => {
      let newArray = state.specifications.filter(
        (specification) => specification.id !== action.payload
      );
      state.additionalFeatures = newArray;
    },

    //for updating existing additionalFeature object in state
    updateAdditionalFeature: (state, action) => {
      state.additionalFeatures = state.additionalFeatures.map((feature) =>
        feature.id === action.payload.id
          ? { ...feature, value: action.payload.value }
          : feature
      );
    },
  },
});
export const {
  addSpecifications,
  removeSpecifications,
  updateSpecifications,
  addAdditionalFeature,
  removeAdditionalFeature,
  updateAdditionalFeature,
  cleanSpecifications,
  cleanAdditionalFeatures,
  addAndUpdateSpecifications,
  addAndUpdateAdditionalFeatures,
} = addProductSlice.actions;

export default addProductSlice.reducer;
