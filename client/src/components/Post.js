import React from 'react';
import Avatar from './Avatar';

function Post({ text, _id }) {
  return (
    <div>
      <Avatar>HE</Avatar>
      <p>{_id}</p>
      <p>{text}</p>
    </div>
  );
}

export default Post;
