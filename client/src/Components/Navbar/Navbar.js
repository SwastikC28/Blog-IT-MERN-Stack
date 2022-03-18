import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Provider, useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <nav>
      <Link to="/">
        <h1>BLOG-IT</h1>
      </Link>
      <NavLink to="/profile" activeClassName={classes["nav-active"]}>
        {user && user.firstName} {user && user.lastName}
      </NavLink>
    </nav>
  );
};

export default Navbar;
