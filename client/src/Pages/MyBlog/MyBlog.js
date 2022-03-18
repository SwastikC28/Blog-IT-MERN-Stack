import Layout from "../../Layout/Layout";
import Blog from "../../Components/Blog/Blog";
import { getAllBlogs } from "../../api/apicalls";
import { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { myBlogActions } from "../../store/myblogs";

const MyBlog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.myBlog);

  useEffect(() => {}, []);
  return (
    <Layout>
      <Blog blogs={blog} />
    </Layout>
  );
};

export default MyBlog;
