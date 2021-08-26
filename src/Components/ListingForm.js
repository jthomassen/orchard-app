import React, { useState } from 'react';
import HeaderList from './HeaderList'

function ListingForm({ handleSubmit }) {
    const [photo_1, setPhoto] = useState('');
    const [location, setLocation] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('');
    const [size, setSize] = useState('');
    
  
    function onSubmit(e) {
      e.preventDefault();
  
      const newListing = {
        photo_1,
        location,
        title,
        price,
        availability,
        size
      };
  
      handleSubmit(newListing);

    }
  
    return (
    <div className="container">
        
        <HeaderList />

        <form className="add-toy-form" onSubmit={onSubmit}>
          <h3>Your Listing</h3>
          <input
            type="text"
            name="title"
            placeholder="Name of property..."
            className="input-text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a property photo..."
            className="input-text"
            value={photo_1}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="location"
            placeholder="Enter your location..."
            className="input-text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="price"
            placeholder="Monthly rent..."
            className="input-text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="availability"
            placeholder="Length of stay..."
            className="input-text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="size"
            placeholder="Size of property in sq ft..."
            className="input-text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Publish"
            className="submit"
          />
        </form>
    </div>
    );
  }

export default ListingForm