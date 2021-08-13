import { useEffect } from 'react';
import styled from 'styled-components';

import LoadAsync from '../../components/LoadAsync';
import CreatePost from '../../components/CreatePost/CreatePost';
import Posts from '../../components/post/Posts';

import {
  getPosts,
  selectPosts,
  selectPostsError,
  deletePost,
  likePost,
  selectPostsStatus,
} from '../../store/slices/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

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
      <CreatePost />
      <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
        <Posts posts={posts} onDelete={onDelete} onLike={onLike} />
      </LoadAsync>
    </Container>
  );
}

export default Home;
