

const PriceCalculator = (props)=>{
    
    const calculateDiscount = (price)=>{
          let discount=0;
          if(price<100 && price>0){
             discount = 0;
          }else if(price>100 && price<=1000){
            discount = price / 10;
          }else if(price>1000 && price<=5000){
            discount = (price * 12)/100;
          }else{ 
            discount = (price * 15)/100;
          }
          return discount.toFixed();
    }

    const calculateTotalPrice = (price)=>{
        return price - calculateDiscount(price);
    }

    return(
        <div>
            <h3>Original Price: {props.price} </h3>
            <h3>Discount : {calculateDiscount(props.price)}</h3>
            <h3>Total Price to pay:{calculateTotalPrice(props.price)} </h3>
        </div>
    )
}

export default PriceCalculator;

//0 to 100 = no discount 
// 101 - 1000 = 10 % 
//1000- 5000 = 12%
//5000+       = 15%;