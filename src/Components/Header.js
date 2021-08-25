import React, { useState } from 'react';

function Header({handleSearch}) {

    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <div className = "header-div">
            <img className = "logo-img" src = "./Images/Orchard-logo.png" alt = "orchard-logo"/>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch(searchTerm)
                }}
                    
                className="location-search">
                <label>
                    <input className="input-box" 
                        type="text" 
                        name="name" 
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Where do you want to live?"
                        />
                </label>
            </form>
        </div>
    ); 
}

export default Header