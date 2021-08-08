import React from 'react';

function Post({ text, _id }) {
  return (
    <div>
      <p>{_id}</p>
      <p>{text}</p>
    </div>
  );
}

export default Post;
