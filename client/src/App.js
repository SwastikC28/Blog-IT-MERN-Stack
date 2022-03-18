import "./App.css";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import store from "./store";
import { Provider } from "react-redux";
import Blog from "./Pages/Blog/Blog";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import Modal from "./Components/UI/Modal/Modal";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import FavBlog from "./Pages/FavBlog/FavBlog";
import MyBlog from "./Pages/MyBlog/MyBlog";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Provider store={store}>
      <Route path="/login">{!isAuth ? <Login /> : <Redirect to="/" />}</Route>

      <Route path="/register">
        <Route path="/register">
          {!isAuth ? <Register /> : <Redirect to="/" />}
        </Route>
      </Route>

      <Route path="/profile" exact>
        {isAuth ? <Profile /> : <Redirect to="/login" />}
      </Route>

      <Route path="/blog" exact>
        {isAuth ? <Blog /> : <Redirect to="/login" />}
      </Route>

      <Route path="/" exact>
        {isAuth ? <Home /> : <Redirect to="/login" />}
      </Route>

      <Route path="/home" exact>
        {isAuth ? <Redirect to="/" /> : <Redirect to="/login" />}
      </Route>

      <Route path="/favblogs" exact>
        {isAuth ? <FavBlog /> : <Redirect to="/" />}
      </Route>

      <Route path="/myblogs" exact>
        {isAuth ? <MyBlog /> : <Redirect to="/" />}
      </Route>

      <Route path="/blog/:blogid" exact>
        {true ? <Blog /> : <Redirect to="/login" />}
      </Route>
    </Provider>
  );
}

export default App;
