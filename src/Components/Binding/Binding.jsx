import { useState } from "react";

const Binding = ()=>{

    let [name, setName] = useState("akshay");
    
    // let interval = setInterval(()=>{
    //      setName("john");
    // },5000);
     
    let onInputChange = (e)=>{
       setName(e.target.value);
    }
    //  console.log(name);
    return(
        <div>
            {/* if value is assigned to input tag it'll be shown in textbox and we cant update it from UI as its unidirectional flow of coding
             i.e. 1 way binding with variable using value prop*/}
            <input type={"text"} 
            value={name}    /*giving variable value to input creates 1way data binding */
            placeholder="Enter your name"
            onChange={onInputChange}/>  {/*giving onChange event listener will create 2 way data binding */}
        </div>
    )
}

export default Binding;