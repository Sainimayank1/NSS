import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


function VideoPlayer(props) {
    return (
        <div className='vedio-player'>
        <Video loop 
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={props.thumbnail}>
            <source src={props.src} type="video/webm" />
            {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
        </Video>
        </div>
    );
}

export default VideoPlayer