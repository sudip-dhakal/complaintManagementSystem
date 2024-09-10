import React, { useState, useEffect } from "react";
import "./Admin_posts.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Admin_posts = () => {
  let location = useLocation();

  const [data, setData] = useState(location.state?.data || []);

  useEffect(() => {
    setData(location.state?.data || []);
  }, [location.state?.data]);

  let handleDelete = (id) => {
    axios
      .delete(
        `https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin/${id}`
      )
      .then(() => {
        // Changed: Updating local state to remove the deleted item
        setData((prevData) => prevData.filter((item) => item.id !== id));
        console.log("Deleted successfully");
      });
  };

  return (
    <React.Fragment>
      <div className="admin-posts-comp">
        <h1 id="post-made">Post Made by Admin to the user</h1>
        {data.map((item, index) => (
          <div key={index} className="admin-post-list">
            <h1 id="sub">
              {index + 1 + ". "}
              {item.subject}
            </h1>
            <p>{item.story}</p>
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
              id="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Admin_posts;
