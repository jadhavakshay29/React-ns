import { useState } from "react";

const UpdatingState = ()=>{

    let [counter, setCounter] = useState(0);
    const onIncrement = (event)=>{
        event.preventDefault();
        // setCounter(counter+1);  //count++ doesnt work in react count+1 does

        for(let i=0; i<10; i++){
            //state varible updation
            setCounter((prevCounterValue)=>prevCounterValue+1); //tp overcome non-updation of value in loop we have passed the function as argument and in that we have updated the value
        }
        
    }

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={onIncrement}>Update counter</button>
        </div>
    )
}

export default UpdatingState;