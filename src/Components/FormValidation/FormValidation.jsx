import { useState } from "react";
import "./FormValidation.css";
import { validateForm } from "../../Utils/Validations/Registration";

const FormValidation = ()=>{

    const [state, setState] = useState({
        name:"",
        email:"",
        password:""
    });
    
     const onInputChange = (e)=>{
        //dynamic updation of key value pairs
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
     }

    const onFormSubmit = (e)=>{
        e.preventDefault();
        //1. validate the form data using custom validations 
        //validations are in utils registration folder
        const validationResult = validateForm(state); //this will return an object and if object is empty not error else error
        
        if(Object.keys(validationResult).length > 0){
            //Error
        }
        //2. if validation passes, call the APIs and pass the data 
        //3. of the validations fails, show the error messages on UI
    }

    return(
        <div>
              <form onSubmit={onFormSubmit}>
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
        </div>
    )
}

export default FormValidation;

