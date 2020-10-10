import React, {useState} from 'react';
import '../css/playzone.css';
import Videoplayer from './videoplayer'
import PlayList from './playlist'

export default function Playzone({results}) {
    const [playlist, setPlaylist] = useState([]);



    return(
        <div className='Playzone'>
            <Videoplayer
                playlist={playlist}
            >
            </Videoplayer>
            <PlayList 
                results={results}
                playlist={playlist}
                setPlaylist={setPlaylist}
            >
            </PlayList>
        </div>
    );
}