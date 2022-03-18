import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar.js/Sidebar";
import classes from "./Layout.module.css";
import Modal from "../Components/UI/Modal/Modal";

import { Provider, useSelector } from "react-redux";

const Layout = (props) => {
  const isModal = useSelector((state) => state.modal.isDisplayed);
  return (
    <>
      <Navbar />

      <div className={classes.container}>
        <Sidebar />
        {props.children}
        {/* <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/auth/home" exact>
          <Blog />
        </Route>

        <Route path="/blog" exact>
          <Blogs />
        </Route>

        <Route path="/profile" exact>
          <Profile />
        </Route> */}
      </div>
      {isModal && (
        // <Provider store={}>
        <Modal />
        // </Provider>
      )}
    </>
  );
};

export default Layout;
