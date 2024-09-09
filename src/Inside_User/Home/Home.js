import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [adminDataList, setAdminDataList] = useState([]);

  let Navigate = useNavigate();
  let adminData = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin")
      .then((res) => {
        setAdminDataList(res.data);
      });
  };

  useEffect(() => {
    adminData();
  }, []);
  console.log(adminDataList);

  let addComplaint = () => {
    Navigate("/addComplaint");
  };
  let logOut = () => {};

  return (
    <React.Fragment>
      <Header />

      <div className="home">
        <div className="home-home">
          <button type="button" id="home-add-cmp" onClick={addComplaint}>
            Add Complaint
          </button>
          <button type="button" id="home-logout" onClick={logOut}>
            Logout
          </button>
        </div>
      </div>

      <div className="post-by-admin">
        <div className="home-title">
          <h1>Post made by admin for users</h1>
        </div>
      </div>
      {adminDataList.map((item, index) => {
        return (
          <div key={index} className="post-desc post-by-admin">
            <h3>Heading: {item.subject}</h3>
            <p>Story: {item.story}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Home;
