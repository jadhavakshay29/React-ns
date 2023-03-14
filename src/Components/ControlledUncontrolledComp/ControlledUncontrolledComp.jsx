import { useState } from "react";
// this is an example of both 2 way binding cause we can access data or update data both from input as well as source
// controlled comp because we can control which value to give to input via code as well

const ControlledUncontrolledComp = ()=>{
    
    const [state, setState] = useState({
        fname:"akshay",
        email:""
    })

    const onInputChange = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [key]:value
        })
    }

    return (
        <div>
             <form>
                <h2>Controlled Components</h2>
                <div>
                  <label htmlFor="fname">Full Name</label>
                  <input name="fname" id="fname" value={state.fname} onChange={onInputChange} type={"text"}/>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input name="email" value={state.email}  onChange={onInputChange} id="email" type={"email"}/>
                </div>
             </form>
             <form>
                <h2>Uncontrolled Components</h2>
                <div>
                  <label htmlFor="fnameUC">Full Name</label>
                  <input id="fnameUC" type={"text"}/>
                </div>

                <div>
                  <label htmlFor="emailUC">Email</label>
                  <input id="emailUC" type={"email"}/>
                </div>
             </form>
        </div>
    )
}

export default ControlledUncontrolledComp;