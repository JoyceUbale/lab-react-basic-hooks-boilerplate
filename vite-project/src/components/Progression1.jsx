import { useState } from "react";
import "../App.css"

function UseState(){
  const [currAge,setAge] = useState(19);
  
  const handleAge = ()=>{
    setAge(currAge+1);
  }

  return (
    <div>
      <h3>My Current Age is {currAge}</h3>
      <button onClick={handleAge}>Get Older</button>
    </div>
  );
}

export default UseState;