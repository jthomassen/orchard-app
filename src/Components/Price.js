import React from 'react';


function Price({filterPrice}){


   
    return (
        <div className="price-box">
            <h4 className="price-box-header">Monthly Budget</h4>
            
            <div className = "price-range-button-container">
                <button
                 onClick={() => filterPrice(500, 1000)} className ="price-range-button-1">$500-$1000</button>
            </div>
            <div>
                <button onClick={() => filterPrice(1000, 3000)}className ="price-range-button-2">$1000-$3000</button>
            </div>
            <div>
                <button onClick={() => filterPrice(3000, 40000)}className ="price-range-button-3">$3000+</button>
            </div>
        </div>







        // <div className="price-box">
        //     <h4 className="price-box-header">Monthly Budget</h4>
        //     <form className="price-search-box">
        //         <label>
        //             <input 
        //                 className="price-input-box" 
        //                 type="text" 
        //                 name="name"
        //             >
        //             </input>
        //         </label>
        //     </form>
        // </div>
    );

}


export default Price

