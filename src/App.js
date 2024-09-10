import "./App.css";
import AppHelp from "./AppHelp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_login from "./Components/Entrance_Page/Admin_Login/Admin_login";
import Signup from "./Components/Entrance_Page/SignUp_Page/Signup";
import Home from "./Inside_User/Home/Home";
import Add_complaint from "./Inside_User/Add_Complaint/Add_complaint";
import Admin_home from "./Admin/Admin_home/Admin_home";
import Admin_posts from "./Admin/Admin-posts/Admin_posts";
import User_lists from "./Admin/User_lists/User_lists";
import Message_Lists from "./Admin/Message_Lists/Message_Lists";

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
          <Route path="/admin-home" element={<Admin_home />} />
          <Route path="/admin-posts" element={<Admin_posts />} />
          <Route path="/users" element={<User_lists />} />
          <Route path="/messages" element={<Message_Lists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
