
import propTypes from 'prop-types';

const Welcome = (props)=>{
    return(
        <>
          <h1 style={{color:"brown"}}>Hey {props.name}!</h1>
           
        </>
    )
}

//using propTypes syntax 
Welcome.propTypes ={
    name: propTypes.string.isRequired,
    title:propTypes.string, //if this prop not passed in App.js file component it would have value of undefined 
    event : propTypes.shape({
        hardware:propTypes.string,
        type:propTypes.string

    })   
}

//using default props 
Welcome.defaultProps = {
    title : "ABCD",   // by this default value for the prop will be ABCD or any Other that we wish to add
}

export default Welcome;