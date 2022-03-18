import Layout from "../../Layout/Layout";
import Blog from "../../Components/Blog/Blog";
import { getAllBlogs } from "../../api/apicalls";
import { useEffect } from "react";
import Axios from "axios";
import { blogActions } from "../../store/blog";
import { useDispatch, useSelector } from "react-redux";

const FavBlog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.favBlog);

  useEffect(() => {
    const getBlogs = async () => {
      let blogs = await getAllBlogs();
      blogs.data.map((blog) => {
        dispatch(
          blogActions.addBlog({
            id: blog._id,
            title: blog.title,
            content: blog.content,
            user: blog.user,
            createdAt: blog.createdAt,
          })
        );
      });
    };
    getBlogs();
  }, []);
  return (
    <Layout>
      <Blog blogs={blog} />
    </Layout>
  );
};

export default FavBlog;
