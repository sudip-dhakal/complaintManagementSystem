import React from "react";
import Header from "../../Header/Header";
import Entrance_Page from "../Entrance_Page/Entrance_Page";

const Admin_login = () => {
  return (
    <div>
      <Header />
      <Entrance_Page access="Admin" who="User" signup="false" />
    </div>
  );
};

export default Admin_login;
