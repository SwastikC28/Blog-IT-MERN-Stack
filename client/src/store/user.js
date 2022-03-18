import { createSlice } from "@reduxjs/toolkit";

let userInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const userSlice = createSlice({
  name: "User",
  initialState: userInitialState,
  reducers: {
    updateProfile(state, action) {
      state.id = action.payload.userid;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
  },
});

export default userSlice;
export const userActions = userSlice.actions;
