import React from 'react';

function Size() {
    return (
        <div className="size-box">
            <h4 className="size-box-header">Size</h4>
            <div className = "size-range-button-container">
                <button className ="size-range-button-1">100-2000 sqft</button>
            </div>
            <div>
                <button className ="size-range-button-2">2000-5000 sqft</button>
            </div>
            <div>
                <button className ="size-range-button-3">5000+ sqft</button>
            </div>
        </div>


        // <div>
        //     <h4>Maximum Size</h4>
        //     <form>
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
    )
}

export default Size