import React from 'react';
import './videoPlayer.css';
import montageVideo from '../../assets/video/montageVideo.mp4';

const VideoPlayer = () => {

    return (
            <video autoPlay muted loop className='video'>
                <source
                    src={montageVideo}
                    type="video/mp4"
                />
            </video>
    );
};

export default VideoPlayer;