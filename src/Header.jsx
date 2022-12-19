import React from "react";
import logo from "./logo.jpg";
import { Hearts } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navi =useNavigate();
  const here=()=>{
    if (window.confirm('Consumes More Data!') == 0 || null){
      return navi(-1);
    }
  }
  return (
    <><div id="fix">
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
      <div className="menu">
      <NavLink activeclassname="active" to="./home">
          Home
        </NavLink>
        <NavLink activeclassname="active" to="./pictures">
          Pictures
        </NavLink>
        <NavLink activeclassname="active" onClick={()=>here()}  to="./videos">
          Videos
        </NavLink>
        <NavLink activeclassname="active" to="./stories">
          Stories
        </NavLink>
      </div>
      <hr/>
      </div>
    </>
  );
};

export default Header;
