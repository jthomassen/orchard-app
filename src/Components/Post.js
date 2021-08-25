
import React from 'react';
import MoreInfo from './MoreInfo'

function Post({post}) {

    const {id, title, photo_1, photo_2, photo_3, photo_4, photo_5, location, availability, size, price, pets} = post

    return (
        <div className="post">
            <div className="image-container">
                <img className = "post-img" src={photo_1} alt={photo_1}/>
                {/* <img className = "post-img" src={photo_2} alt={photo_2}/>
                <img className = "post-img" src={photo_3} alt={photo_3}/>
                <img className = "post-img" src={photo_4} alt={photo_4}/>
                <img className = "post-img" src={photo_5} alt={photo_5}/> */}
            </div>
            <div className="post-info">
                <h4 className="location">{location}</h4>
                <h3 className="title">{title}</h3>
                <div className="info-container">
                    <div className="price-key-value">
                        <h4 className="price-key">PRICE</h4>
                        <h5 className="price">${price}/mo</h5>
                    </div>
                    <div className="avail-key-value">
                        <h4 className="availability-key">AVAILABILITY</h4>
                        <h5 className="availability">{availability}</h5>
                    </div>
                    <div className="size-key-value">
                        <h4 className="size-key">SIZE</h4>
                        <h5 className="size">{size}</h5>
                    </div>
                </div>
                {/* <h5 className="pets">Allows Pets: {pets}</h5> */}
            </div>
           
        </div>
    );
}

export default Post