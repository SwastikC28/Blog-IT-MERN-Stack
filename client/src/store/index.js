import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import blogSlice from "./blog";
import modalSlice from "./modal";
import userSlice from "./user";
import favBlogSlice from "./favblog";
import myBlogSlice from "./myblogs";
import alertSlice from "./alert";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    user: userSlice.reducer,
    blog: blogSlice.reducer,
    favBlog: favBlogSlice.reducer,
    myBlog: myBlogSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
