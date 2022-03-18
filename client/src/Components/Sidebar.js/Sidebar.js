import { Link, NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import { authActions } from "../../store/auth";
const Sidebar = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.showModal());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.setItem("token", "");
  };
  return (
    <div className={classes.sidebar}>
      <div className={classes["compose-container"]}>
        <button onClick={showModalHandler}>COMPOSE</button>
      </div>

      <div className={classes.sidelinks}>
        <NavLink to="/" activeClassName={classes.active}>
          Home
        </NavLink>
        <NavLink to="/favblogs" activeClassName={classes.active}>
          Favourite
        </NavLink>

        <NavLink to="/myblogs" activeClassName={classes.active}>
          My Blogs
        </NavLink>
      </div>

      <div className={classes.logout}>
        <button onClick={logoutHandler}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Sidebar;
