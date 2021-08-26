import React, { useState } from 'react';
// import ListingForm from './ListingForm';
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


            <Route >
              <Link to="/listing">
                  <button className="listing-buttong">Publish a listing</button>
              </Link>
            </Route>


        </div>
    ); 
}

export default Header