import { useEffect } from 'react';
import LoadAsync from '../../components/LoadAsync';

import {
  getPosts,
  selectPosts,
  selectPostsError,
  deletePost,
  likePost,
  selectPostsStatus,
} from '../../store/slices/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Posts from '../../components/post/Posts';

const Container = styled.div``;

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const postsError = useSelector(selectPostsError);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deletePost(id));
  };

  const onLike = (id) => {
    dispatch(likePost(id));
  };

  return (
    <Container>
      <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
        <Posts posts={posts} onDelete={onDelete} onLike={onLike} />
      </LoadAsync>
    </Container>
  );
}

export default Home;
