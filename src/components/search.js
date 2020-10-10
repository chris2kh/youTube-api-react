import React from 'react'
import '../css/search.css'
import {ReactComponent as SearchIcon} from '../icons/search.svg'

export default function Search({searchText,setSearchText, setResults}) {
    
    const inputHandler = event => {
        if(event.key === 'Enter'){
            return search();
        }
        setSearchText(event.target.value);
    };

    const search = () => {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        const youTube = 'https://www.googleapis.com/youtube/v3/search';
        
        fetch(`${youTube}?key=${apiKey}&type=video&part=snippet&maxResults=50&q=${searchText}`)
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.log(error));
    };

    return(
        <div className='search'>
            <input className='search-bar' type="text" placeholder="Search your video here" onKeyUp={inputHandler}></input>
            <SearchIcon className='search-icon' onClick={search}></SearchIcon>            
        </div>
    );
}