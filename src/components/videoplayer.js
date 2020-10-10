import React from 'react'
import '../css/videoplayer.css'

export default function Videoplayer({playlist}) {

    const getVideosId = () => playlist.map(item => item.id.videoId).join();

    return (
        playlist.length > 0 &&
        <div className='videoplayer-container'>
             <iframe width="420" height="315"
                src={`https://www.youtube.com/embed?playlist=${getVideosId()}`}
                allowFullScreen
             >
            </iframe> 
        </div>
    )
}
