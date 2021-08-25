import React, {useState} from 'react';
import Price from "./Price";
import Availability from "./Availability";
import Size from "./Size";

function NavBar({priceSearch, handlePriceSearch}) {
    const [showPrice, setShowPrice] = useState(false)
    const [showAvail, setShowAvail] = useState(false)
    const [showSize, setShowSize] = useState(false)



    function handlePriceClick(){
        setShowPrice(!showPrice)

    //     if (!showPrice){
    //         setShowPrice(!showPrice) && setShowAvail(showAvail) 
    //         && setShowSize(showSize)
    //     }
     }

    function handleAvailClick(){
        setShowAvail(!showAvail)

    //     if (!showAvail){
    //         setShowAvail(!showAvail)
    //         setShowPrice(showPrice) 
    //         setShowSize(!showSize)
    //     }
        
     }

    function handleSizeClick(){
        setShowSize(!showSize)

        // if (!showSize){
        //     setShowSize(!showSize)
        //     setShowAvail(showAvail) 
        //     setShowPrice(!showPrice)
        // }
    }


    return (
        <div className="nav-bar">
            <div className="price-button-container">
                <button 
                    className="price-button" 
                    onClick = {handlePriceClick} >Price 
                </button>
                {showPrice? <Price/> : ""}
            </div>
            
            <div className="avail-button-container">
                <button 
                    className="avail-button" 
                    onClick={handleAvailClick} >Availability 
                </button>
                {showAvail? <Availability/> : ""}
            </div>
            
            <div className="size-button-container">
                <button 
                    className="size-button" 
                    onClick={handleSizeClick} >Size 
                </button>
                {showSize? <Size/> : ""}
            </div>
           
        </div>
    );
}



export default NavBar



// <button> Availability </button>
// <button> Size </button>