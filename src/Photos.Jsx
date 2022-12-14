import React from "react";

const Photos = () => {
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images.push(r(item));
    });

    return images;
  }
  const images = importAll(
    require.context("./photos")
  );
  return (
    <><div className="photos">
      {/* {images.map((val) => {
        return <img src={val.images[0]} />;
      })} */}
      <img src={images[0]} />
      <img src={images[1]} />
      <img src={images[2]} />
      <img src={images[3]} />
      <img src={images[4]} />
      <img src={images[5]} />
      <img src={images[6]} />
      <img src={images[7]} />
      <img src={images[8]} />
      <img src={images[9]} />
      </div>
    </>
  );
};

export default Photos;
