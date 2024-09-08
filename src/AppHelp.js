import React from "react";
import Entrance_Page from "./Components/Entrance_Page/Entrance_Page/Entrance_Page";
import Header from "./Components/Header/Header";

const AppHelp = () => {
  return (
    <div>
      <Header />
      <Entrance_Page access="User" who='Admin' signup='true'/>
    </div>
  );
};

export default AppHelp;
