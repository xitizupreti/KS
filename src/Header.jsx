import React from "react";
import logo from "./logo.jpg";
import { Hearts } from "react-loader-spinner";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="./home">
          <img src={logo} alt="logo" width="80" height="90%" />
        </a>
        <div className="pad">
          <Hearts
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        <h1 style={{marginTop:"10px"}}>
          <span style={{ color: "blue" }}>Kshitiz</span>💘
          <span style={{ color: "red" }}>Srijal</span>
        </h1>
        <div>
          <Hearts
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
