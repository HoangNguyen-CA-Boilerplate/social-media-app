import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import styled from 'styled-components';

import {
  getPosts,
  selectPosts,
  selectGetPostsStatus,
} from '../store/slices/postSlice';

import Post from '../components/Post';
import Spinner from '../components/Spinner';

const Container = styled.div``;

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const getPostsStatus = useSelector(selectGetPostsStatus);
  const history = useHistory();

  const routeToPost = (id) => {
    history.push(`/posts/${id}`);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      {getPostsStatus === 'loading' ? (
        <Spinner />
      ) : (
        posts.map(({ _id, ...fields }) => (
          <Post
            key={_id}
            _id={_id}
            {...fields}
            onClick={() => routeToPost(_id)}
          />
        ))
      )}
    </Container>
  );
}

export default Home;
