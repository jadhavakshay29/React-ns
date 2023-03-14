//parent component
import PriceInput from "../PriceInput/PriceInput"; // importing child to parent 

const DashBoard = ()=>{
    return(
        <div className="dashboard">
            <PriceInput/>
        </div>
    )
}

export default DashBoard;