import React from "react";
import Header from "./Header";
import Pictures from "./Pictures";
import Error from "./Error";
import Home from "./Home";
import Videos from "./Videos";
import Stories from "./Stories";
import { Routes, Route, NavLink,redirect} from "react-router-dom";

const KS = () => {
  function here(){
    if (window.confirm('Consumes More Data!')===0){
      return redirect("/home");
    }
  }
  return (
    <><div id="fix">
      <Header />
      <div className="menu">
      <NavLink activeclassname="active" to="./home">
          Home
        </NavLink>
        <NavLink activeclassname="active" to="./pictures">
          Pictures
        </NavLink>
        <NavLink activeclassname="active" onClick={here} to="./videos">
          Videos
        </NavLink>
        <NavLink activeclassname="active" to="./stories">
          Stories
        </NavLink>
      </div>
      <hr/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="pictures" element={<Pictures/>} />
        <Route path="videos" element={<Videos />} />
        <Route path="stories" element={<Stories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default KS;
