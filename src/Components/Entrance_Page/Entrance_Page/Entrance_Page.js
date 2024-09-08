import React, { useEffect, useState } from "react";
import "./Entrance_Page.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Entrance_Page = (props) => {
  const [signUp, setSignUp] = useState(props.signup);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  // for user credentials
  let tUserName = username.trim();
  let tPassword = password.trim();

  //for admin credentials
  let aUserName = adminUsername.trim();
  let aPassWord = adminPassword.trim();

  let getData = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/data")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const Navigate = useNavigate();

  let handleUserLogin = () => {
    console.log(`The data is : ${data.username}`);
    const users = data.find(
      (user) => user.username === tUserName && user.password === tPassword
    );
    console.log(`The Result is ${users}`);
    if (users) {
      Navigate("/home");
    } else {
      alert("Invalid Username and Password");
    }
  };

  let handleAdminLogin = () => {
    const admins = data.find(
      (admin) =>
        admin.adminUsername === aUserName && admin.adminPassword === aPassWord
    );
    if (admins) {
      Navigate("/Admin_home");
    } else {
      alert("Invalid Username or password");
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    props.access == "User" ? handleUserLogin() : handleAdminLogin();
  };

  return (
    <>
      <div className="entrance-page">
        <div className="form-wrap">
          <h1 id="user">{props.access} Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="username">
              <input
                type="username"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={` ${props.access} Username here`}
              />
              <br />
              <br />
            </div>

            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={`${props.access} Password Here`}
              />
              <br />
              <br />
            </div>
            <div className="button">
              <button type="submit" id="submit-button">
                Login
              </button>
            </div>
          </form>

          <div>
            {signUp && (
              <p id="signup">
                Don't have an User account ?{" "}
                <span
                  id="sig"
                  onClick={() => {
                    Navigate("/signup");
                  }}
                >
                  Sign Up
                </span>{" "}
              </p>
            )}
          </div>

          <div
            className="admin"
            onClick={() => {
              Navigate(`/${props.who} `);
            }}
          >
            {props.who} Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrance_Page;
