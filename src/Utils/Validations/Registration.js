
/**
 * Name: min 4 and max 10 characters 
 * Email: should be valid email
 * Password: min 8 characters to 16, includes alphabets and numbers, 1 uppercase, 1 lowecase and 1 special char 
 */

const validateForm = (formObject)=>{

     const error = {};

    //validations 
        //1. validate the form data using custom validations 
        if(formObject.fname.length<4 || formObject.fname.length>10){
            // console.log(formObject.fname);
            //Invalid name
            error.name= "name should contain min 4 to 10 char";
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(formObject.email)){
            // console.log(formObject.email);
           //Invalid email
           error.email= " please enter valid email";
        }
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
        if(!passwordRegex.test(formObject.password)){
             //Invalid password
             error.password = " must have min 8 characters to 16, includes alphabets and numbers, at least 1 uppercase, 1 lowecase and 1 special char";
        }
       
        return error;
}

//this is called named export  
export {validateForm};