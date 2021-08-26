import React from 'react';

function Size({filterSize}) {
    return (
        <div className="size-box">
            <h4 className="size-box-header">Size</h4>
            <div className = "size-range-button-container">
                <button 
                    onClick={() => filterSize(100, 2000)}
                    className ="size-range-button-1">100-2000 sqft
                </button>
            </div>
            <div>
                <button 
                    onClick={() => filterSize(2000, 5000)}
                    className ="size-range-button-2">2000-5000 sqft
                </button>
            </div>
            <div>
                <button 
                    onClick={() => filterSize(5000, 10000)}
                    className ="size-range-button-3">5000+ sqft
                </button>
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