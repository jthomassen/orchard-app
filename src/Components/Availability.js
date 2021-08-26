import React from 'react';

function Availability({filterAvail}) {
    return (
        <div className="avail-box">
            <h4 className="avail-box-header">Availability</h4>
            <div className = "avail-range-button-container">
                <button 
                    onClick={() => filterAvail(1, 6)}
                    className ="avail-range-button-1">1-6 Months
                </button>
            </div>
            <div>
                <button 
                    onClick={() => filterAvail(7, 12)}className="avail-range-button-2">7-12 Months
                </button>
            </div>
            <div>
                <button 
                    onClick={() => filterAvail(12, 24)}
                    className ="avail-range-button-3">12+ Months
                </button>
            </div>
        </div>
    )
}

export default Availability