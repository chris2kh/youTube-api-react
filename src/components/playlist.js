import React from 'react'
import PlaylistCard from './playlistCard'
import '../css/playlist.css'

export default function Playlist({results, playlist, setPlaylist}) {

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const onDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('id');
        const video = results.items.find(item => item.id.videoId === id);
        setPlaylist([...playlist, video]);
    }

    const dragYourVideosHereSign = 
    <div className= 'playlist empty' onDragOver={onDragOver} onDrop={onDrop}>
        <p> drag your videos here to create a playlist</p>
    </div>;

    const playlistWithVideos = 
    <div className='playlist show' onDragOver={onDragOver} onDrop={onDrop}> {
        playlist.map(item => {
            return <PlaylistCard
                key={item.id.videoId}
                item={item}
                playlist={playlist}
                setPlaylist={setPlaylist}>
            </PlaylistCard>
        })
    }   
    </div>;

    // first time the pageloads
    if(results.items.length === 0 && playlist.length === 0){
        return null;
    }
    // user has searched for videos but no playlist yet
    if (results.items.length > 0 && playlist.length === 0){
        return dragYourVideosHereSign;
    }
    // user has searched for videos and has already loaded videos in playlist
    return playlistWithVideos;
}
