import { useState, useEffect } from "react";
import classes from "./Login.module.css";
import TextField from "@mui/material/TextField";

import { Link, useHistory } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { login } from "../../api/apicalls";
import { authActions } from "../../store/auth";
import { userActions } from "../../store/user";
import { favBlogActions } from "../../store/favblog";
import { myBlogActions } from "../../store/myblogs";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  const [errorState, setError] = useState({
    errorStatus: null,
    errorTextHeading: "",
    errorTextPara: "",
  });

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouch] = useState("false");
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouch] = useState("false");
  const [error, setFormError] = useState({
    emailError: false,
    passwordError: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setFormError({ ...error, emailError: false });
    }
    else {
      setFormError({ ...error, emailError: true });
    }
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setFormError({ ...error, passwordError: true });
    } else {
      setFormError({ ...error, passwordError: false });
    }
  };

  const emailBlurHandler = (e) => {
    setEmailTouch(true);
  };

  const passwordBlurHandler = (e) => {
    setPasswordTouch(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = await login(email, password);

    console.log(data);

    if (data.success) {
      localStorage.setItem("token", data.token);
      dispatch(authActions.login());
      dispatch(
        userActions.updateProfile({
          userid: data.user._id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          role: data.user.role,
        })
      );

      data.user.blogs.map((blog) => {
        dispatch(
          myBlogActions.unshiftMyBlog({
            id: blog._id,
            title: blog.title,
            content: blog.content,
            user: blog.user,
            createdAt: blog.createdAt,
          })
        );
      });
      history.replace("/");
    } else {
      console.log("Error");
    }
  };

  return (
    <div className={classes["login-container"]}>
      <form className={classes["form-container"]} onSubmit={submitHandler}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          {errorState.errorStatus && (
            <Alert severity="error">
              <AlertTitle>{errorState.errorTextHeading}</AlertTitle>
              <strong>{errorState.errorTextPara}</strong>
            </Alert>
          )}

          {isLoginSuccess && (
            <Alert severity="success">
              <AlertTitle>Redirecting..</AlertTitle>
              Login <strong>Successfully</strong>
            </Alert>
          )}
        </Stack>
        <div className={classes.heading}>
          <h1> BLOG-IT</h1>
        </div>
        <div className={classes.greeting}>
          <h3>Welcome Back</h3>
          <p>Login to Continue to Blog-IT</p>
        </div>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type={"email"}
          margin="dense"
          value={email}
          onChange={emailOnChangeHandler}
          onBlur={emailBlurHandler}
          error={emailTouched && !error.emailError ? false : true}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type={"password"}
          margin="dense"
          value={password}
          onChange={passwordOnChangeHandler}
          onBlur={passwordBlurHandler}
          error={passwordTouched && !error.passwordError ? false : true}
        />

        <Button variant="contained" margin="dense" type="submit" disabled={email && password && !error.emailError && !error.passwordError ? false : true}>
          LOGIN
        </Button>

        {/* <div className={classes["input-container"]}>
          <label
            htmlFor="email"
            className={
              formik.touched.email && formik.errors.email ? classes.error : ""
            }
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={classes.error}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div className={classes["input-container"]}>
          <label
            htmlFor="password"
            className={
              formik.touched.password && formik.errors.password
                ? classes.error
                : ""
            }
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={classes.error}>{formik.errors.password}</p>
          ) : null}
        </div> */}

        <p className={classes.forgotPassword}>Forgot Password ?</p>
        {/* <button
          type="submit"
          className={
            true ? classes["active-button"] : classes["disabled-button"]
          }
        >
          {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="inherit" className={classes.spinner} />
            </Box>
          ) : (
            "LOGIN"
          )}
        </button> */}
      </form>

      <p className={classes["redirection-text"]}>
        Don't Have an Account? <Link to="/register">Sign Up Now</Link>
      </p>
    </div>
  );
};

export default Login;
