import React from 'react';

const VideoDetail = ({ vid }) => {
  if (!vid) {
    return <div>Loading...</div>;
  }
  // special synthax for string interpolation
  const videoSrc = `https://www.youtube.com/embed/${vid.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='video frame' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{vid.snippet.title}</h4>
        <p>{vid.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
