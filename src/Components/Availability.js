import React from 'react';

function Availability() {
    return (
        <div className="avail-box">
            <h4 className="avail-box-header">Availability</h4>
            <div className = "avail-range-button-container">
                <button className ="avail-range-button-1">1-6 Months</button>
            </div>
            <div>
                <button className ="avail-range-button-2">7-12 Months</button>
            </div>
            <div>
                <button className ="avail-range-button-3">12+ Months</button>
            </div>
        </div>
            
            
            
        // <div> 
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

export default Availability