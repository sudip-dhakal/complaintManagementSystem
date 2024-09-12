import React, { useState } from "react";
import "./Signup.css";
import Header from "../../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [user_name, setUser_name] = useState("");
  const [myemail, setMyemail] = useState("");
  const [psw, setPsw] = useState("");
  let Navigate = useNavigate();
  
  let sendSignUpData = (e) => {
    e.preventDefault();
    axios
      .post("https://66d581f5f5859a704266544c.mockapi.io/complainSys/data", {
        username: user_name,
        email: myemail,
        password: psw,
        complaint: "",
        subject: "",
      })
      .then(() => {
        alert("sign up successful");
        Navigate("/");
      });
  };

  return (
    <React.Fragment>
      <div className="signup">
        <Header />
      </div>

      <form className="signup_form">
        <div className="name">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="username">
          <input
            type="username"
            placeholder="Your username"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Your email"
            value={myemail}
            onChange={(e) => setMyemail(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Your password"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />
        </div>

        <button id="signup-submit" type="submit" onClick={sendSignUpData}>
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
