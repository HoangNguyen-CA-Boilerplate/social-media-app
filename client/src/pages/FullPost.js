import React from 'react';
import Post from '../components/post/Post';
import LoadAsync from '../components/LoadAsync';

import { useParams } from 'react-router-dom';
import { getPost } from '../APIUtils';
import useAsync from '../hooks/useAsync';

function FullPost() {
  const { id } = useParams();
  const post = useAsync(getPost, [id]);

  return (
    <LoadAsync {...post}>
      <Post {...post.data} em={true} />
    </LoadAsync>
  );
}

export default FullPost;
