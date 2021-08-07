import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getPosts, selectPosts } from '../store/slices/postSlice';
import Post from '../components/post/Post';
import Spinner from '../components/Spinner';
import CreatePost from '../posts/CreatePost';

const Container = styled.div``;

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container>
      {posts.map(({ title, text }) => (
        <Post title={title} text={text} />
      ))}
    </Container>
  );
}

export default Home;
