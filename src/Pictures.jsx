import React from "react";
import { Idata } from "./Vdata";

const Pictures = () => {
  // function importAll(r) {
  //   let images = [];
  //   r.keys().map((item) => {
  //     images.push(r(item));
  //   });

  //   return images;
  // }
  // const images = importAll(
  //   require.context("../public/pictures")
  // );
  return (
    <>
      {Idata.map((item) => {
        return (
          <div className="pictures">
            <img alt="" src={item} />
          </div>
        );
      })}
    </>
  );
};

export default Pictures;
