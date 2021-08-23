import React from 'react';
import Post from './Post';

function Posts({ posts, onDelete, onLike }) {
  return posts.map((post) => {
    return (
      <Post
        key={post?._id}
        post={post}
        onDelete={() => onDelete(post?._id)}
        onLike={() => onLike(post?._id)}
      />
    );
  });
}

export default Posts;
