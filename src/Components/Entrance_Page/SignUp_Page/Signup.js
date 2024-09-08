import React from "react";
import "./Signup.css";
import Header from "../../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";
const Signup = () => {
  let Navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="signup">
        <Header />
      </div>

      <form className="signup_form">
        <div className="name">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="username">
          <input type="username" placeholder="Your username" />
        </div>
        <div className="email">
          <input type="email" placeholder="Your email" />
        </div>
        <div className="password">
          <input type="password" placeholder="Your password" />
        </div>

        <button id="signup-submit" type="submit">
          Sign up
        </button>
        <p id="login">
          Already have account ?{" "}
          <span
            id="login-here"
            onClick={() => {
              Navigate("/");
            }}
          >
            Login here{" "}
          </span>
        </p>
      </form>
    </React.Fragment>
  );
};

export default Signup;
