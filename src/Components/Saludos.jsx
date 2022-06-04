import { useEffect, useState } from "react";


export default function Saludos(props) {
    console.log(props)
    const [stateCar, setStateCar] = useState(true);
    const [contar,setContar]=useState(0);
    const EncendidoAuto=()=>{
      setStateCar(prevValue=>!stateCar);
      setContar(contar+1);
    }
    const {name="artu",age,greetings}=props;
    useEffect(()=>{
document.title=`You ${contar}`
    },[contar])
  return (
    <div>
      <h2>Props with Objects</h2>
      Hola {name } tienes {age}  <br />
      <button onClick={()=>greetings(props.name) }>Greetings</button>
      <h4>Tu sentido del humor :{stateCar ? "Prendido": "Apagado"}</h4>
      <h5>Clicks: {contar}</h5>
      <button onClick={EncendidoAuto}>qué tal?</button>
      </div>
  )
}
