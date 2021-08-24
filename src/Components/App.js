import React, { useEffect, useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import PostContainer from './PostContainer'
import Map from './Map'

const postAPI = 'http://localhost:3001/posts'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(postAPI)
      .then((res) => res.json())
      .then(json => setPosts(json))
  }, [] )

  return (
    <div className="App">
      <Header />
      <NavBar />
      <PostContainer posts={posts}/>
      <Map />
    </div>
  );
}

export default App;
