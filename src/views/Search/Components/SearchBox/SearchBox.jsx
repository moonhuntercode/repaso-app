import React, { useState } from 'react';
import './SearchBox.css'
const SearchBox = ({onSearch,onClose}) => {
    const[searchText,setSearchText]=useState("");
    const handleCloseSearch=()=>{
        onClose()
        setSearchText("")
    }
    return (

        <div className='search_Box'>
            <label htmlFor="buscador">
        <h3 className='search_box_title'>buscador de personal</h3>
            <input  className="search_box_input"
            type="search"
             name="buscador" id="buscador"
             value={searchText}
             onChange={({target:{value}})=>setSearchText(value)}
             />
        </label><br />
        <button onClick={onSearch} >search</button>
        <button onClick={handleCloseSearch} >cerrar</button>
        </div>
       
    );
}

export default SearchBox;
