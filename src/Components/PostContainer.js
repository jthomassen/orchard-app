import React from 'react';
import Post from './Post'

function PostContainer({posts, locationSearch}) {

    return (
        <div>
            {posts
            .filter((post) => post.location.toLowerCase().startsWith(locationSearch))
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