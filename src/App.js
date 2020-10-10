import React, {useState} from 'react';
import Search from './components/search';
import Results from './components/results';
import Playzone from './components/playzone';
import './App.css';

export default function App() {
  const [searchText, setSearchText]= useState('');
  const [results, setResults] = useState({items: []});
  return (
    <div className='app'>
      <Search 
        searchText={searchText} 
        setSearchText={setSearchText}
        setResults={setResults}>
      </Search>
      <div className='div-results-playzone'>
        <Results results={results}></Results>
        <Playzone results={results}></Playzone>
      </div>
    </div>
  );
}