import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "Alert",
  initialState: [],
  reducers: {
    addAlert(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        type: action.payload.type,
      });
    },

    removeAlert(state, action) {
      state = state.filter((alert) => alert.id !== action.payload);
      console.log(state);
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
