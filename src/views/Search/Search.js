// Si queremos lo volvemos arrow function
// pero pa en otra ocación  

import { useState } from "react"
import SearchBox from "./Components/SearchBox/SearchBox"
import './Search.css'
import data from '../../data/Users.json';
export default function Search() {
  const [isAtTop,setIsAtTop]=useState(false)
  const handleCloseOpenSearch=()=>setIsAtTop(!isAtTop)

  return (
    <div className={`search_container ${isAtTop ? "search_top": "search_center"}`}>

        <SearchBox
        onSearch={handleCloseOpenSearch}
        onClose={handleCloseOpenSearch}
        />
    </div>
  )
}
