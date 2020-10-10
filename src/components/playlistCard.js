import React from 'react'
import '../css/playlistCard.css'
import {ReactComponent as Arrow} from '../icons/arrow.svg'
import {ReactComponent as Trash} from '../icons/trash.svg'

export default function PlaylistCard({item, playlist, setPlaylist}) {
    const deleteFromPlaylist = () => {
        setPlaylist(playlist.filter(current => current.id.videoId !== item.id.videoId));
    }

    return (
        <div className='PlaylistCard'>
            <Arrow className='PlaylistCard-play-icon'></Arrow>
            <img
                className='PlaylistCard-thumbnail'  
                src={item.snippet.thumbnails.medium.url} 
                alt={item.snippet.title}>
            </img>
            <div className='PlaylistCard-text-info'>
                <p className='PlaylistCard-text-info-title'>{item.snippet.title}</p>
                <p className='PlaylistCard-text-info-channel'>{item.snippet.channelTitle}</p>
            </div>
            <Trash className='PlaylistCard-trash-icon' onClick={deleteFromPlaylist}></Trash>
        </div>
    );
}
