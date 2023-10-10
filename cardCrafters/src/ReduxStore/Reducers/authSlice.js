import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

//Fetch Request for generating tokens
export const fetchAuth = createAsyncThunk("fetchAuth", async (cred) => {
  try {
    const url = "http://127.0.0.1:8000/token/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: cred.username,
        password: cred.password,
      }),
    });
    const data = await response.json();
    if (response.status == 200) {
      localStorage.setItem("accessToken", JSON.stringify(data));
    } else {
      localStorage.setItem("accessToken", JSON.stringify({}));
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
});


//Fetch Request for refreshing tokens
export const refreshAuth = createAsyncThunk("refreshAuth", async (refresh) => {
  try {
    const url = "http://127.0.0.1:8000/token/refresh/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refresh,
      }),
    });
    const data = await response.json();


    if (response.status == 200) {
      let token = {
        refresh: refresh,
        access: data.access,
      };
      localStorage.setItem("accessToken", JSON.stringify(token));
    } else {
      localStorage.setItem("accessToken", JSON.stringify({}));
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    //For getting Tokens

    builder.addCase(fetchAuth.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    //For refreshing Tokens
    builder.addCase(refreshAuth.pending, (state, action) => {
      state.error = null
    });
    builder.addCase(refreshAuth.fulfilled, (state, action) => {
      state.loading = false;
      const token = {
        access: action.payload.access,
        refresh: JSON.parse(localStorage.getItem("accessToken")).refresh,
      };
      state.user = token;
      state.error = null
    });
    builder.addCase(refreshAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
  reducers: {

    //For changing user state to null
    emptyUser : (state, action) =>{
        state.user = action.payload
    }
  },
});


export const {emptyUser} = authSlice.actions
export default authSlice.reducer;
