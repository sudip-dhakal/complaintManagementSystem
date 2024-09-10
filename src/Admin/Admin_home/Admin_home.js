import React, { useEffect, useState } from "react";
import "./Admin_home.css";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin_home = () => {
  const [obtained, setObtained] = useState([]);
  const [subject, setSubject] = useState("");
  const [story, setStory] = useState("");
  let obtained_data = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin")
      .then((res) => {
        setObtained(res.data);
      });
  };
  useEffect(() => {
    obtained_data();
  }, []);

  let Navigation = useNavigate();

  let setClear = () => {
    setSubject("");
    setStory("");
  };

  let handlePost = () => {
    Navigation("/admin-posts", {
      state: { data: obtained },
    });
  };

  let postHandler = () => {
    axios
      .post("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin", {
        subject: subject,
        story: story,
      })
      .then(() => {
        setClear();
      });
  };

  let lisUsers = () => {
    Navigation("/users");
  };

  let messageLists = () => {
    Navigation("/messages");
  };

  return (
    <React.Fragment>
      <div className="admin-home-wrap">
        <div className="side-bar-nav">
          <ul className="side-ul">
            <li id="parent">Menu</li>
            <hr />
            <br />
            <li onClick={handlePost}>Posts</li>
            <li onClick={lisUsers}>User</li>
            <li onClick={messageLists}>Message</li>
          </ul>
        </div>
        <div className="top-green">
          <img src={logo} alt="government logo" />
          <h1>Welcome admin</h1>
        </div>
        <div className="anything-on-your-mind">
          <h1>Anything on your mind ? </h1>
          <input
            type="text"
            id="admin-subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Story"
            rows="1"
            cols="10"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
          <button type="button" id="post-admin" onClick={postHandler}>
            Post
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin_home;
