import React from "react";

const Pictures = () => {
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images.push(r(item));
    });

    return images;
  }
  const images = importAll(
    require.context("./pictures")
  );
  return (
    <><div className="pictures">
      {/* {images.map((val) => {
        return <img src={val.images[0]} />;
      })} */}
      <img alt="" src={images[0]} />
      <img alt="" src={images[1]} />
      <img alt="" src={images[2]} />
      <img alt="" src={images[3]} />
      <img alt="" src={images[4]} />
      <img alt="" src={images[5]} />
      <img alt="" src={images[6]} />
      <img alt="" src={images[7]} />
      <img alt="" src={images[8]} />
      <img alt="" src={images[9]} />
      </div>
    </>
  );
};

export default Pictures;
