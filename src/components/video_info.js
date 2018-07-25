import React from 'react';

const VideoInfo = (props) => {
  const video = props.video;
  console.log(video);
  if(!video) {
    return<div className="video-detail col-md-2 offset-md-4">Search Results</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-6 offset-md-1">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} title={videoId}></iframe>
        </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>
  );
}
export default VideoInfo;