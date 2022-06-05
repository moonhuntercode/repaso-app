// Si queremos lo volvemos arrow function

import { useState } from "react"
import SearchBox from "./Components/SearchBox/SearchBox"
import './Search.css'
// pero pa en otra ocación  
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
