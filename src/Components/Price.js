import React from 'react';


function Price(){

    return (
        <div className="price-box">
            <h4 className="price-box-header">Monthly Budget</h4>
            <div>
                <button>$500-$1000</button>
            </div>
            <div>
                <button>$1000-$3000</button>
            </div>
            <div>
                <button>$3000+</button>
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

