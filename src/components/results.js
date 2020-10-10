import React from 'react';
import ResultCard from './resultCard';
import "../css/Results.css";

export default function Results({results}) {
    return(
        <div className="Results"> { 
            results.items.map(item => { 
                return <ResultCard key={item.id.videoId} item={item}> </ResultCard>
            })
        }
        </div>
    );
}