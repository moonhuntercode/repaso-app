import React, { useState } from 'react'

export default function Todo() {
  const [datos,setDatos] = useState({
    name:"",
    lastname:"",
  });
  const handleInputChange=(event)=>{
console.log(event.target.value);
setDatos({
  ...datos,
  [event.target.name]:[event.target.value]
});
}
const sendData=(event)=>{
event.preventDefault();
console.log('enviando datos: '+datos.name+' '+datos.lastname);
}
  return (
    <div>
      <h1>TODO APP1</h1>
      <form onSubmit={sendData} >
        <label htmlFor="id">Input Item</label>
        <input type="text" 
        placeholder='id'
        name="id" id="id" /> <br />
        {/* name */}
        <label htmlFor="name">name</label>
        <input placeholder='name'
         type="text" name="name" 
         id="name" 
         onChange={handleInputChange}
         />
         <br />
         {/* lastname */}
         <label htmlFor="lastname">lastname</label>
         <input type="text"
         placeholder='lastname'
          name="lastname" id="lastname"
          onChange={handleInputChange} /> <br />
        <button type='submit'>Add</button>
      </form>
      <h6>{datos.name}-{datos.lastname}</h6>
    </div>
  )
}
