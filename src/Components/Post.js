import React from 'react';
import MoreInfo from './MoreInfo'

function Post({post}) {

    const {id, title, photo_1, photo_2, photo_3, photo_4, photo_5, location, availability, size, price, pets} = post

    return (
        <div className="post">
            <div className="image-container">
                <img src={photo_1} alt={photo_1}/>
                <img src={photo_2} alt={photo_2}/>
                <img src={photo_3} alt={photo_3}/>
                <img src={photo_4} alt={photo_4}/>
                <img src={photo_5} alt={photo_5}/>
            </div>
            <div className="post-info">
                <h3>{title}</h3>
                <h4>{location}</h4>
                <h4>{price}</h4>
                <h5>{availability}</h5>
                <h5>{size}</h5>
                <h5>Allows Pets: {pets}</h5>
            </div>
            <MoreInfo />
        </div>
    );
}

export default Post