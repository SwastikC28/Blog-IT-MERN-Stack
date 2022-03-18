import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favBlogSlice = createSlice({
  name: "FavBlog",
  initialState: initialState,
  reducers: {
    addFavBlog(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        user: action.payload.user,
        createdAt: action.payload.createdAt,
      });
    },

    unshiftFavBlog(state, action) {
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

export default favBlogSlice;
export const favBlogActions = favBlogSlice.actions;
