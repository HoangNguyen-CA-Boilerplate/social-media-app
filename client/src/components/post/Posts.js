import React from 'react';
import Post from './Post';

function Posts({ posts, onDelete, onLike }) {
  return posts.map(({ _id, ...fields }) => {
    return (
      <Post
        key={_id}
        _id={_id}
        {...fields}
        onDelete={() => onDelete(_id)}
        onLike={() => onLike(_id)}
      />
    );
  });
}

export default Posts;
