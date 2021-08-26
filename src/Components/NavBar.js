import React, {useState} from 'react';
import Price from "./Price";
import Availability from "./Availability";
import Size from "./Size";

function NavBar({filterPrice, filterAvail, filterSize}) {
    const [showPrice, setShowPrice] = useState(false)
    const [showAvail, setShowAvail] = useState(false)
    const [showSize, setShowSize] = useState(false)

    

    function handlePriceClick(){
        setShowPrice(!showPrice) 

    //  if (!showPrice){
    //         setShowAvail(showAvail === false) && setShowSize(showSize === false) 
    //     }else {
    //     setShowAvail(!showAvail === false) 
    //     }
        
     }

    function handleAvailClick(){
        setShowAvail(!showAvail)

        // if (showAvail=== true){
        //     setShowPrice(showPrice === false) && setShowSize(showSize === false) 
        // }else {
        //     setShowPrice(showPrice === false) && setShowSize(showSize === false)
        // }
        
     }

    function handleSizeClick(){
        setShowSize(!showSize)  

        // if (showSize=== true){
        //     setShowPrice(showPrice === false) && setShowAvail(showAvail === false) 
        // }else {
        //     setShowPrice(showPrice === false) && setShowAvail(showAvail === false)
        // }

    }

  



    return (
        <div className="nav-bar">
            <div className="price-button-container">
                <button 
                    className="price-button" 
                    onClick = {handlePriceClick} >Price 
                </button>
                {showPrice? <Price filterPrice={filterPrice}/> : ""}
            </div>
            
            <div className="avail-button-container">
                <button 
                    className="avail-button" 
                    onClick={handleAvailClick} >Availability 
                </button>
                {showAvail? <Availability filterAvail={filterAvail}/> : ""}
            </div>
            
            <div className="size-button-container">
                <button 
                    className="size-button" 
                    onClick={handleSizeClick} >Size 
                </button>
                {showSize? <Size filterSize={filterSize}/> : ""}
            </div>
           
        </div>
    );
}



export default NavBar



// <button> Availability </button>
// <button> Size </button>