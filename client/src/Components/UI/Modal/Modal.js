import classes from "./Modal.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modal";
import { blogActions } from "../../../store/blog";
import { createBlog } from "../../../api/apicalls";

const Modal = (props) => {
  const isModal = useSelector((state) => state.modal.isDisplayed);
  const dispatch = useDispatch();

  const [blogContent, setBlogContent] = useState({ title: "", content: "" });
  const [focus, setFocus] = useState({
    title: false,
    content: false,
  });

  const closeModalHandler = () => {
    dispatch(modalActions.closeModal());
  };

  const titleChangeHandler = (e) => {
    setBlogContent({ ...blogContent, title: e.target.value });
  };

  const contentChangeHandler = (e) => {
    setBlogContent({ ...blogContent, content: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await createBlog(blogContent.title, blogContent.content);

    if (data.success) {
      console.log(data.data);
      dispatch(
        blogActions.unshiftBlog({
          id: data.data.id,
          title: data.data.title,
          content: data.data.content,
          user: data.data.user,
          createdAt: data.data.createdAt,
        })
      );
    } else {
      console.log(data.error);
    }
    dispatch(modalActions.closeModal());

    setBlogContent({ title: "", content: "" });
  };

  return (
    <>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <div className={classes.content}>
            <h1>Create a Blog </h1>

            <div className={classes.close} onClick={closeModalHandler}></div>
          </div>
        </header>

        <form onSubmit={submitHandler}>
          <div className={classes["compose-body"]}>
            <div className={classes["input-group"]}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={blogContent.title}
                onChange={titleChangeHandler}
                onFocus={() => setFocus({ ...focus, title: true })}
                onBlur={() => setFocus({ ...focus, title: false })}
              />
              {!blogContent.title && focus.title && (
                <p className={classes.error}>*Title should not be empty</p>
              )}
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                className={classes.content}
                value={blogContent.content}
                onChange={contentChangeHandler}
                onFocus={() => setFocus({ ...focus, content: true })}
                onBlur={() => setFocus({ ...focus, content: false })}
              />
              {!blogContent.content && focus.content && (
                <p className={classes.error}>*Content should not be empty</p>
              )}
            </div>
          </div>

          <footer className={classes.actions}>
            <div className={classes["submit-blog"]}>
              <button type="submit" disabled={blogContent.title && blogContent.content ? false : true}>BLOG</button>
            </div>
          </footer>
        </form>
      </div>
    </>
  );
};

export default Modal;
