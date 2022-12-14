import React from "react";
import Header from "./Header";
import Photos from "./Photos";
import { Routes, Route } from "react-router-dom";

const KS = () => {
  return (
    <><Header />
      <Routes>
        <Route path="photos" element={<Photos />} />
      </Routes>
    </>
  );
};

export default KS;
