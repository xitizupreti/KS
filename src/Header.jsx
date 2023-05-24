import React from "react";
import logo from "./logo.jpg";
import { Hearts } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const notify = () => {
    toast.warn("Consumes More Data!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <div id="fix">
        <div className="header">
          <a href="./home">
            <img src={logo} alt="logo" width="80" height="90%" />
          </a>
          <div className="pad">
            <Hearts
              height="80"
              width="80"
              color="red"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          <h1 style={{ marginTop: "10px" }}>
            <span style={{ color: "blue" }}>YOU</span>💘
            <span style={{ color: "red" }}>ME</span>
          </h1>
          <div>
            <Hearts
              height="80"
              width="80"
              color="red"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
        <div className="menu">
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="./pictures">
            Pictures
          </NavLink>
          <NavLink activeclassname="active" onClick={notify} to="./videos">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            Videos
          </NavLink>
          <NavLink activeclassname="active" to="./stories">
            Stories
          </NavLink>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
