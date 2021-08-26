import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
  
  } from 'react-router-dom'

function Header({handleSearch}) {

    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <Router>
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
            <Link> Home</Link>
        </div>
       </Router>
    ); 
}

export default Header