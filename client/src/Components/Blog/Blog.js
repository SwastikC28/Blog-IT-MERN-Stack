import { useSelector } from "react-redux";
import classes from "./Blog.module.css";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Blog = (props) => {
  console.log(props);

  return (
    <div className={classes["blog-parent"]}>
      <div className={classes["blog-container"]}>
        {props.blogs.length > 0 ? (
          props.blogs.map((blog, index) => {
            return (
              <div className={classes.blog} key={uuidv4()}>
                <div className={classes.avatar}>
                  <h1>{index + 1}</h1>
                </div>
                <div className={classes.content}>
                  <h1>{blog.title}</h1>
                  <Divider />
                  <p>{blog.content}</p>

                  <div className={classes["content-footer"]}>
                    <Link to={`/blog/${blog.id}`}>Read More</Link>
                    <Link to={"/"}>Favourite</Link>
                  </div>
                </div>

                <div className={classes.calender}>
                  <p>8:30 PM</p>
                  <h1>12th</h1>
                  <p>September</p>
                  <p>2020</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Blogs to Display</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
