import React, { useState } from 'react';
import './SearchBox.css'
const SearchBox = () => {
    const[searchText,setSearchText]=useState("");
    return (
        <div className='search_Box'>
            <label htmlFor="buscador">
        <h1>buscador de personal</h1>
            <input type="search"
             name="buscador" id="buscador"
             value={searchText}
             onChange={({target:{value}})=>setSearchText(value)}
             className="search_box_input"
             />
        </label>
        <button>search</button>
        </div>
    );
}

export default SearchBox;
