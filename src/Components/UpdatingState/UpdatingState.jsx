import { useState } from "react";

const UpdatingState = ()=>{

    let [counter, setCounter] = useState(0);
    const onIncrement = (event)=>{
        event.preventDefault();
        setCounter(counter+1);  //count++ doesnt work in react count+1 does
        
    }

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={onIncrement}>Update counter</button>
        </div>
    )
}

export default UpdatingState;