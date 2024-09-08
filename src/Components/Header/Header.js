import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <>
      <div className="header-wrap">
        <img src={Logo} alt="government logo" />
        <div className="cpms">
          <h1>Complaint Management System</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
