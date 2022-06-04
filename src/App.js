import logo from './logo.svg';
import './App.css';
import Saludos from './Components/Saludos';
import { useEffect, useState } from 'react';
import Todo from './Todo';



function App() {
  
  
  const Users={
   
    age:27,
    color:"red"
  }
  const greetings=(name)=>{

    console.log("Saludando a todos"+name);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todo/>
        <p>Passing props</p>
        <Saludos name={Users.Name} age="30" 
        UseState={useState}
        users={Users} greetings={greetings} 
        />
      </header>
    </div>
  );
}

export default App;
