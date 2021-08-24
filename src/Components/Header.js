import React from 'react';

function Header() {
    return (
        <div>
            <h1>Orchard</h1>
            <form className="location-search">
                <label className="input-box">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Where do you want to live?"
                        />
                </label>
            </form>
        </div>
    ); 
}

export default Header