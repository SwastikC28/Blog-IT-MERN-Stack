import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: "Blog",
  initialState: initialState,
  reducers: {
    addBlog(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        user: action.payload.user,
        createdAt: action.payload.createdAt,
      });
    },

    unshiftBlog(state, action) {
      state.unshift({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        user: action.payload.user,
        createdAt: action.payload.createdAt,
      });
    },
  },
});

export default blogSlice;
export const blogActions = blogSlice.actions;
