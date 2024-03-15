import React, { useContext } from "react";
import logo from "../img/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function Navbar({ login }) {
  const { setModalOpen } = useContext(LoginContext);
  
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return (
        <>
          <li key="profile">
            <Link to="/profile">Profile</Link>
          </li>
          <li key="createPost">
            <Link to="/createPost">Create Post</Link>
          </li>
          <li key="following">
            <Link style={{ marginLeft: "20px" }} to="/followingpost">
              My Following
            </Link>
          </li>
          <li key="logout">
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>
              Log Out
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li key="signup">
            <Link to="/signup">SignUp</Link>
          </li>
          <li key="signin">
            <Link to="/signin">SignIn</Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">{loginStatus()}</ul>
    </div>
  );
}
