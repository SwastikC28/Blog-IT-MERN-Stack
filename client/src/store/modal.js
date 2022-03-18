import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "Modal",
  initialState: {
    isDisplayed: false,
  },
  reducers: {
    showModal(state) {
      state.isDisplayed = true;
    },
    closeModal(state) {
      state.isDisplayed = false;
    },
  },
});

export default modalSlice;
export const modalActions = modalSlice.actions;
