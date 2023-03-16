import { useState } from "react";
import "./FormValidation.css";
import { validateForm } from "../../Utils/Validations/Registration";

const FormValidation = ()=>{
    // to show eye button to toggle show and hide eye
    let [passwordType, setPasswordType] = useState("password");

    const togglePassword = (e)=>{
        e.preventDefault();
        if(passwordType==="password"){
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }
    
    //to store data
    const [state, setState] = useState({
        fname:"",
        email:"",
        password:""
    });
     
    // to store validation result 
    const [errors, setErrors] = useState({
        fname:"",
        email:"",
        password:""
    });
    
     const onInputChange = (e)=>{
        //dynamic updation of key value pairs
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
        // console.log(state)
     }

    const onFormSubmit = (e)=>{
        e.preventDefault();
        //clear old errors stored in variables 
        setErrors({});
        //1. validate the form data using custom validations 
        //validations are in utils registration folder
        const validationResult = validateForm(state); //this will return an object and if object is empty not error else error
        
        if(Object.keys(validationResult).length > 0){
            //Error
            setErrors(validationResult);
            return;
        }
        //2. if validation passes, call the APIs and pass the data 
        alert("form submission successful")
        //3. of the validations fails, show the error messages on UI
    }

    return(
        <div>
              <form onSubmit={onFormSubmit}>
              <div>
                    <label htmlFor="fname">Full Name</label>
                    <input id="fname" name="fname" onChange={onInputChange}/>
                    <div>
                    <span className="error-msg">{errors.name}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type={"text"} id="email" onChange={onInputChange}/>
                    <div>
                    <span className="error-msg">{errors.email}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type={passwordType} id="password" onChange={onInputChange}/>
                    <div>
                    <span className="error-msg">{errors.password}</span>
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="fa-solid fa-eye-slash"></i> :<i className="fa-solid fa-eye"></i> }
                     </button>
                    </div>
                    </div>
                </div>

                <input type={"submit"}  value="Register"></input>
            </form>
        </div>
    )
}

export default FormValidation;

