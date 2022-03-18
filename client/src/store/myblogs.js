import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const myBlogSlice = createSlice({
  name: "MyBlogs",
  initialState: initialState,
  reducers: {
    addMyBlog(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        user: action.payload.user,
        createdAt: action.payload.createdAt,
      });
    },

    unshiftMyBlog(state, action) {
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

export default myBlogSlice;
export const myBlogActions = myBlogSlice.actions;
