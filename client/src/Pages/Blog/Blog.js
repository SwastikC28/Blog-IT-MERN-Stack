import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "../../Layout/Layout";
import classes from "./Blog.module.css";

const Blog = () => {
  const params = useParams();
  const id = params.blogid;

  const blogs = useSelector((state) => state.blog);
  let blog;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === id) {
      blog = blogs[i];
      break;
    }
  }
  console.log(blog);
  return (
    <Layout>
      <div className={classes["blog-parent"]}>
        <div className={classes["blog-container"]}>
          <div className={classes.blog}>
            <div className={classes["user-info"]}>
              <div className={classes.avatar}>
                <h1>S</h1>
              </div>
              <div className={classes.info}>
                <h1>
                  {blog.user.firstName} {blog.user.lastName}
                </h1>
                <p>{blog.user.email}</p>
                <p>Blogged on : {blog.user.createdAt}</p>
              </div>
            </div>
            <div className={classes.content}>
              <h1>{blog.title}</h1>

              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
