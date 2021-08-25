import React, { useEffect, useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import PostContainer from './PostContainer'
import Map from './Map'

const postAPI = 'http://localhost:3001/posts'

function App() {

  const [posts, setPosts] = useState([]);
  const [locationSearch, setLocationSearch] = useState('')
  const [priceSearch, setPriceSearch] = useState(100)

  useEffect(() => {
    fetch(postAPI)
      .then((res) => res.json())
      .then(json => setPosts(json))
  }, [] )

  function handleSearch(city){
    setLocationSearch(city)
  }

  // function handlePriceClickOne(price){
  //   setPriceSearch(price)
        
  // }


  return (
    <div className="App">
      <Header 
        handleSearch={handleSearch}
      />
      <NavBar priceSearch = {priceSearch} />
      <PostContainer 
        posts={posts} 
        locationSearch={locationSearch}
        priceSearch = {priceSearch}


      />
      <Map />
    </div>
  );
}

export default App;
