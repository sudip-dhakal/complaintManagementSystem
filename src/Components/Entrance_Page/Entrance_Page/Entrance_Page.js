import React, { useEffect, useState } from "react";
import "./Entrance_Page.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Entrance_Page = (props) => {
  const [signUp, setSignUp] = useState(props.signup);
  const [data, setData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // for user credentials
  let tUserName = username.trim();
  let tPassword = password.trim();

  let getData = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/data")
      .then((res) => {
        setData(res.data);
      });
  };

  let getAdmin = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin")
      .then((res) => {
        setAdminData(res.data);
      });
  };

  useEffect(() => {
    getData();
    getAdmin();
  }, []);

  const Navigate = useNavigate();
  console.log(adminData);

  let handleUserLogin = () => {
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
    const admins = adminData.find(
      (admin) => admin.username === tUserName && admin.password === tPassword
    );
    if (admins) {
      Navigate("/admin-home");
    } else {
      alert("Invalid Username and Password");
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
              Navigate(`/${props.who}`);
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
