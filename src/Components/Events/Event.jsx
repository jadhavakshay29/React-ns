import './Event.css';
import { useState } from 'react';


//capturing live input from textbox

const Event = ()=>{
     //useState varible - heading is a basically variable so to get the value we call that in h3 tag
    const [heading, setheading] = useState("");
    const [color, setColor] = useState("");
    
    const onInputChange = (event)=>{
        // console.log(event.target.value);
        setheading(event.target.value);
    }

    const onColorChange =(event)=>{
        console.log(event.target.value);
        setColor(event.target.value);
    }

    return (
       <div className='event-container' style={{backgroundColor:color}}>
           <input type={"text"} onChange={onInputChange} placeholder="Enter some text"></input>
           <h3>{heading}</h3>
           <input type={"color"} onChange={onColorChange}></input>
       </div>
    );
}

export default Event;