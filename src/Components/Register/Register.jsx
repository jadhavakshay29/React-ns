import { useState } from "react";

const Register = ()=>{

    // let [fname, setFname] = useState("");
    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");
    // ----------or----------
    
    //combine all state varibles into single object 
    let [state, setState] = useState({
        fname :"",
        email:"",
        password:""
    })

    // const onFullNameChange = (event)=>{
    //     // console.log(event.target.value);
    //     // setFname(event.target.value);
    //     //---------or-----------
    //     // setState({fname: event.target.value}) //if we do this approach the 1st line will get printed in UI but second input will be o the same line and 1st input will get erased 
    //     setState({
    //         ...state,
    //         fname: event.target.value
    //     })
    // };
    
    // const onEmailChange = (event)=>{
    //     // setEmail(event.target.value);
    //     // setState({email: event.target.value})
    //     setState({
    //         ...state, // this will spread the object and keep only thing that is required
    //         email: event.target.value
    //     })
    // };
    
    // const onPasswordChange = (event)=>{
    //     // setPassword(event.target.value);
    //     // setState({password: event.target.value})
    //     setState({
    //         ...state,
    //         password: event.target.value
    //     })
    // };
    
    // instead of using 3 functions we can use 1 function and in all inputs as eventhandlers with the help of name prop

    const onInputChange = (e)=>{
        // console.log(e.target.name , e.target.value);
        const key = e.target.name; 
        const value = e.target.value;
        setState({
            ...state,
            // fname: "abc"  // this is static key when we know name of key 
            [key] : value // this is dynamic key when we dont know name of key so we wrap it in [] so that it'd update dynamically  
             
        })
    }
    
    console.log(state);
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="fname">Full Name</label>
                    <input id="fname" name="fname" onChange={onInputChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type={"email"} id="email" onChange={onInputChange}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type={"password"} id="password" onChange={onInputChange}></input>
                </div>

                <input type={"submit"}  value="Register"></input>
            </form>
            <div>
                <h4>Form Inputs</h4>
                <div>{state.fname}</div>
                <div>{state.email}</div>
                <div>{state.password}</div>
            </div>
        </div>
    )
 }

 export default Register;