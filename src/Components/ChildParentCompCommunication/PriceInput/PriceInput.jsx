//children to DashBoard

const PriceInput = (props)=>{
     
    // const [ price, setPrice] = useState(0); // we'll pass data to dashboard directly

    const onPriceChange = (e)=>{
        // setPrice(e.target.value);
        props.onPriceUpdate(e.target.value);  // same as above we are just calling the method as prop from parent comp
                                              // to send data from child to parent
    }

    return(
        <div className="price-input">
            <input type={"number"} onChange={onPriceChange} placeholder="enter price"/>
        </div>
    )
}

export default PriceInput;