import "./Greet.css";

const Greet = ({age, fname, lname})=>{
    const myStyles = {
        color:"#FF680B",
         fontSize:"30px"
    }
    let greetText="";
    let greetClasses = "";
    //these conditions are for classes 
        if(age <25 ){
             greetText= "Hii";
        }else if(age>20 && age <500){
            greetClasses = "green";
        }else{
           greetClasses = "brown";
    }

    //these conditions are for functions 
    const checkAge = (age)=>{
        if(age <25 ){
            greetText= "Hii";
            myStyles.color = "blue";
      
        }else if(age>20 && age <500){
            greetText= "hello";
            myStyles.backgroundColor= "aqua";
            greetClasses = "green";
        }else{
            greetText= "Namaste";
            myStyles.backgroundColor= "#054895";
            greetClasses = "brown";
        }
        return greetText + " ";
    }

    return (
       //&nbsp gives sapce 
        <h1 className={`greet-text ${greetClasses}`} >

            {checkAge(age)}&nbsp;
             {fname} {lname} , your age is {age}
        </h1>
    );
};

export default Greet;