import React from 'react';
import Post from '../components/post/Post';
import LoadAsync from '../components/LoadAsync';

import { useParams, useHistory } from 'react-router-dom';
import { getPost } from '../APIUtils';
import useAsync from '../hooks/useAsync';

function FullPost() {
  const { id } = useParams();
  const post = useAsync(getPost, [id]);
  const history = useHistory();

  const onDelete = () => history.push('/home');
  return (
    <LoadAsync {...post}>
      <Post {...post.data} em={true} onDelete={onDelete} />
    </LoadAsync>
  );
}

export default FullPost;
