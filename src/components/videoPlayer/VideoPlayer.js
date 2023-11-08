import React from 'react';
import style from './videoPlayer.css';
import montageVideo from '../../assets/video/montageVideo.mp4';

const VideoPlayer = () => {


    return (
      <div className="container">
            <video autoPlay muted loop className='video'>
                <source
                    src={montageVideo}
                    type="video/mp4"
                />
            </video>
      </div>
    );
};

export default VideoPlayer;