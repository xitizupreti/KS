import React from "react";

const Videos = () => {
    function importAll(r) {
    let videos = [];
    r.keys().map((item, index) => {
      videos.push(r(item));
    });

    return videos;
  }
  const videos = importAll(
    require.context("./videos")
  );
  return (
    <><div className="pictures">
      {/* {images.map((val) => {
        return <img src={val.images[0]} />;
      })} */}
            <video alt="" className="vid" src={videos[0]}/>
      <video className="vid" preload="metadata" controls><source src={videos[0]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[1]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[2]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[3]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[4]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[5]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[6]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[7]}/> </video>
      <video className="vid" preload="metadata" controls><source src={videos[8]}/> </video>
      </div>
    </>
  );
};

export default Videos;
