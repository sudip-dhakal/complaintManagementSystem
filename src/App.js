import "./App.css";
import AppHelp from "./AppHelp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_login from "./Components/Entrance_Page/Admin_Login/Admin_login";
import Signup from "./Components/Entrance_Page/SignUp_Page/Signup";
import Home from "./Inside_User/Home/Home";
import Add_complaint from "./Inside_User/Add_Complaint/Add_complaint";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHelp />} />
          <Route path="/User" element={<AppHelp />} />
          <Route path="admin" element={<Admin_login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addComplaint" element={<Add_complaint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
