import React, {useState} from 'react';
import Price from "./Price";

function NavBar() {
    const [showPrice, setShowPrice] = useState(false)


    function handlePriceClick(){
        setShowPrice(!showPrice)
    }


    return (
        <div>
           
         <button className = "price-button" onClick = {handlePriceClick} >Price </button>
         {showPrice? <Price/> : ""}
           
        </div>
    );
}



export default NavBar



// <button> Availability </button>
// <button> Size </button>