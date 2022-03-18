import { useState } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alerts from "../../Components/Alert/Alert";
import Stack from "@mui/material/Stack";
import { register } from "../../api/apicalls";
import { useDispatch } from "react-redux";
import { alertActions } from "../../store/alert";

import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onFirstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const id = uuidv4();
    const response = await register(email, firstName, lastName, password);
    console.log(response);
    if (response.success) {
      dispatch(
        alertActions.addAlert({
          id,
          type: "success",
          title: "Registration Successful",
          content: "Redirecting...",
        })
      );

      setTimeout(() => {
        dispatch(alertActions.removeAlert(id));
        history.replace("/");
      }, 1000);
      dispatch(authActions.login());
    }
  };

  return (
    <div className={classes["login-container"]}>
      <form className={classes["form-container"]} onSubmit={submitHandler}>
        {/* <Stack sx={{ width: "100%" }} spacing={2}>
          {errorState.errorStatus && (
            <Alert severity="error">{errorState.errorText}</Alert>
          )}
        </Stack> */}
        <Alerts />

        <div className={classes.heading}>
          <h1> BLOG-IT</h1>
        </div>

        <div className={classes.greeting}>
          <h3>Register Here</h3>
          <p>Get your free Blog-IT Account Here and Start Blogging.</p>
        </div>

        <div className={classes.grouped}>
          <div className={classes["input-container"]}>
            <label htmlFor="FirstName">First Name*</label>
            <input
              name="firstName"
              type="text"
              id="FirstName"
              autoComplete="off"
              onChange={onFirstNameChangeHandler}
              value={firstName}
            />
          </div>

          <div className={classes["input-container"]}>
            <label htmlFor="LastName">Last Name*</label>
            <input
              name="lastName"
              type="text"
              id="LastName"
              autoComplete="off"
              onChange={onLastNameChangeHandler}
              value={lastName}
            />
          </div>
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="email">Email*</label>
          <input
            name="email"
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={onEmailChangeHandler}
          />
        </div>

        <div className={classes["input-container"]}>
          <label htmlFor="password">Password*</label>
          <input
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChangeHandler}
          />
        </div>

        <button type="submit">REGISTER</button>
      </form>

      <p className={classes["redirection-text"]}>
        Already Have an Account? <Link to="/login">Login Here </Link>
      </p>
    </div>
  );
};

export default Register;
