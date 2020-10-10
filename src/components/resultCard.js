import React from 'react';
import "../css/ResultCard.css";

export default function ResultCard({item}) {
    const onDragStart = (event) => {
        event.dataTransfer.clearData();
        event.dataTransfer.setData('id', item.id.videoId);
        event.dataTransfer.effectAllowed = 'move';
    };
    
    return(
        <div className="ResultCard" draggable='true' onDragStart={onDragStart}>
            <img 
                className="ResultCard-thumbnail" 
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}>
            </img>
            <p className="ResultCard-title">{item.snippet.title}</p>
            <p className="ResultCard-small-info">{item.snippet.channelTitle}</p> 
            <p className="ResultCard-small-info">{item.snippet.publishedAt.split('T')[0]}</p>
        </div>
    );
}