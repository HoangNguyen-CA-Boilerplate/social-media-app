import React from 'react';
import Post from './Post';

function Posts({ posts }) {
  return posts.map(({ _id, ...fields }) => {
    return <Post key={_id} _id={_id} {...fields} />;
  });
}

export default Posts;
