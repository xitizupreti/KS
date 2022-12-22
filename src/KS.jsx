import React from "react";
import Header from "./Header";
import Pictures from "./Pictures";
import Error from "./Error";
import Home from "./Home";
import Videos from "./Videos";
import Stories from "./Stories";
import { Routes, Route } from "react-router-dom";

const KS = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pictures" element={<Pictures />} />
        <Route path="videos" element={<Videos />} />
        <Route path="stories" element={<Stories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default KS;
