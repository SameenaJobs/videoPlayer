import React from 'react';
import VideoListElement from './video_list_elements';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListElement 
          onUserSelected={props.onVideoSelect}           
          key={video.etag} 
          video={video} />
    );
  });
  return (
    <div className="col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>    
    </div>
  );
}

export default VideoList;