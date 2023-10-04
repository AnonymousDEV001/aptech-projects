import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersMessages = createAsyncThunk(
  "fetchUsersMessages",
  async () => {
    let url = "http://127.0.0.1:8000/contact/";
    let users = await fetch(url);
    return await users.json();
  }
);

const initialState = {
  usersMessages: null,
  loading: false,
  error: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsersMessages.fulfilled, (state, action) => {
      state.usersMessages = action.payload;
    });
    builder.addCase(fetchUsersMessages.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersMessages.rejected, (state, actions) => {
      state.error = true;
    });
  },
});

export default dashboardSlice.reducer;
