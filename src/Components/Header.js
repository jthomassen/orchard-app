import React from 'react';

function Header() {
    return (
        <div className = "header-div">
            <img className = "logo-img" src = "./Images/Orchard-logo.png"/>
            <form className="location-search">
                <label>
                    <input className = "input-box" 
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