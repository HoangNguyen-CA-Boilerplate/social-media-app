import React, { useEffect } from 'react';
import Post from '../components/post/Post';
import LoadAsync from '../components/LoadAsync';

import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPost,
  selectPostStatus,
  selectPostError,
  selectDeleted,
  getPost,
  likePost,
  deletePost,
} from '../store/slices/fullpostSlice';

function FullPost() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ id }));
  }, [dispatch, id]);

  const deleted = useSelector(selectDeleted);
  const post = useSelector(selectPost);
  const postStatus = useSelector(selectPostStatus);
  const postError = useSelector(selectPostError);

  const onLike = (id) => {
    dispatch(likePost(id));
  };

  const onDelete = (id) => {
    dispatch(deletePost(id));
  };

  if (deleted) return <Redirect to='/home' />;

  return (
    <LoadAsync
      loading={postStatus === 'initial' || postStatus === 'loading'}
      error={postError}
    >
      <Post
        {...post}
        em={true}
        onLike={() => onLike(post._id)}
        onDelete={() => onDelete(post._id)}
      />
    </LoadAsync>
  );
}

export default FullPost;
