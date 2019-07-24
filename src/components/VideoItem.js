import React from 'react';
import './VideoItem.css';

// for accessing the api objects, go to Network > XHR > highlight search result > preview
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // when clicked, the video item calls the callback that is tied all the way back to the state of the App component
    <div className='item video-item' onClick={() => onVideoSelect(video)}>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
