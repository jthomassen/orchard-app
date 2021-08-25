import React from 'react';
import Post from './Post'

function PostContainer({posts, locationSearch, priceSearch}) {

    return (
        <div>
            {posts
            .filter((post) => post.location.toLowerCase().startsWith(locationSearch))
            .filter((post) => post.price )
            // .filter(post => post.price > 500 && post.price < 1000, {priceSearch})
            // .filter(post => post.price > 1000 && post.price < 3000, {priceSearch})
            // .filter(post => post.price >= 3000, {priceSearch})
            .map((post) => (
                <Post
                    key={post.id}
                    post={post}
                />
        ))}
        </div>
    );
}

export default PostContainer