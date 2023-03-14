//parent component
import { useState } from "react";
import PriceInput from "../PriceInput/PriceInput"; // importing child to parent 
import PriceCalculator from "../PriceCalculator/PriceCalculator";

const DashBoard = ()=>{
    
    const [price, setPrice] = useState(0);
    
    //passing function as a prop to update input value from child to parent
    const onPriceUpdate = (price)=>{
        setPrice(price);  // price = e.target.value argument passed in to child comp
    }

    return(
        <div className="dashboard">
            <h1>DashBoard</h1>
            <PriceInput onPriceUpdate={onPriceUpdate}/>
            <PriceCalculator price={price}/>
            {/* {price} */}
        </div>
    )
}

export default DashBoard;