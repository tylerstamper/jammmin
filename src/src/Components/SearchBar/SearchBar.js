import './SearchBar.css';
import { useState } from 'react';

function SearchBar(props){

    const [term, setTerm] = useState('');

    const search = () => {
        props.onSearch(term);
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    }

    return(
        <div className='SearchBar'>
            <input placeholder='Enter a Song, Album, or Artist' onChange={handleTermChange}/>
            <button className='SearchButton' onClick={search}>Search</button>
        </div>
    );
}
export default SearchBar;