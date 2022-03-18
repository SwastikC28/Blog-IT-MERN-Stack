import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
