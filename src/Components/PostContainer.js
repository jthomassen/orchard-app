import React from 'react';
import Post from './Post'

function PostContainer({posts}) {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                />
        ))}
        </div>
    );
}

export default PostContainer