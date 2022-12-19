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
    require.context("../public/videos")
  );
  return (
    <>
      {/* {videos.map(({val}) => (
        <ReactPlayer className="vid" url={val} />
      ))} */}
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[0]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[1]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[2]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[3]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[4]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[5]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[6]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[7]}/> </video>
      <video className="vid" preload="metadata" controls controlsList="nodownload"><source src={videos[8]}/> </video>
      </>
  );
};

export default Videos;
