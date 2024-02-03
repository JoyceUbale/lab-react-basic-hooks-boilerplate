import { useState, useEffect } from "react";
import "../App.css"


function UseState(){

  const [state, setState] = useState({age:19, sibling:3});

  const handleState = (val)=>{
    setState({
      ...state,[val]:state[val]+1
    })
  }

  const {age,sibling} = state;

  useEffect(()=>{
    alert(`something changed ${age}`)
  },[sibling,age])

  return(
    <div>
      <h3>My Current Age is {age}</h3>
      <h4>My sibling {sibling}</h4>
      <button onClick={()=>{handleState("age")}}>age</button>
      <button onClick={()=>{handleState("sibling")}}>sib</button>
    </div>
  )

}

export default UseState;