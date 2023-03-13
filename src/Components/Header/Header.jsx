import "./Header.css";
import { useState } from "react";

const Header = ()=>{
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onBtnClick = (e)=>{
        e.preventDefault();
        // console.log("button clicked");
        // setIsLoggedIn(true);
        setIsLoggedIn(!isLoggedIn);  //change if false it'll negate to true and vice-versa
    }
    
    if(isLoggedIn){
        return(
            <div>
                <header>
                    <nav className={"site-nav"}>
                        <a href="#">DashBoard</a>
                        <a href="#">Revenue</a>
                        <a href="#">Monthly Status</a>
                        <div>
                        {/* conditional rendering */}
                        {isLoggedIn ? <button onClick={onBtnClick}>Logout</button> : <button onClick={onBtnClick}>Login</button>}
                    </div>
                    </nav>
                </header>
            </div>
        );
    }else{
        return (
            <header>
                <nav className="site-nav">
                    <a href="#">Home</a>
                    <a href="#">About me</a>
                    <a href="#">Contact</a>
                    <div>
                        {/* conditional rendering */}
                        {isLoggedIn ? <button onClick={onBtnClick}>Logout</button> : <button onClick={onBtnClick}>Login</button>}
                    </div>
                </nav>
            </header>
        );
    }
    
};

export default Header;