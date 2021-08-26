import React, { useEffect, useState } from 'react'
import Header from './Header'
import ListingForm from './ListingForm';
import NavBar from './NavBar'
import PostContainer from './PostContainer'
import Map from './Map'
import {
  BrowserRouter as Router,
  Switch, Route, Link

} from 'react-router-dom'

const postAPI = 'http://localhost:3001/posts'

function App() {

  const [posts, setPosts] = useState([]);
  const [locationSearch, setLocationSearch] = useState('')

  useEffect(() => {
    fetch(postAPI)
      .then((res) => res.json())
      .then(json => setPosts(json))
  }, [] )

  function addListing(listing) {
    fetch(postAPI, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => setPosts([...posts, json]));
  }

  function handleSearch(city){
    setLocationSearch(city)
  }

  const filterPrice = (priceNumMin, priceNumMax) => {
    const filteredPrice = posts.filter((post) => post.price <= priceNumMax && post.price >= priceNumMin)
    setPosts(filteredPrice)
  }

  const filterAvail = (availNumMin, availNumMax) => {
    const filteredAvail = posts.filter((post) => post.availability <= availNumMax && post.availability >= availNumMin)
    setPosts(filteredAvail)
  }

  const filterSize = (sizeNumMin, sizeNumMax) => {
    const filteredSize = posts.filter((post) => post.size <= sizeNumMax && post.size >= sizeNumMin)
    setPosts(filteredSize)
  }


  return (
    <Router>

      <div className="App">
        <Switch>


          <Route exact path="/">
            <Link to="/home">
              <img className = "logo-img" src = "./Images/Orchard-logo.png" alt = "orchard-logo"/>

            </Link>
          </Route>











          <Route exact path="/home">
            <Header 
                handleSearch={handleSearch}
            />
            <NavBar 
              filterPrice={filterPrice}
              filterAvail={filterAvail}
              filterSize={filterSize}
              />

            <PostContainer 
              posts={posts} 
              locationSearch={locationSearch}
            />
            <Map />
          </Route>












          <Route exact path="/listing">
            <ListingForm
              handleSubmit={addListing}
            />
          </Route>





        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
