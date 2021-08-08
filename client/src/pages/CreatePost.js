import React from 'react';
import styled from 'styled-components';
import CreatePostForm from '../post/CreatePostForm';
import Layout from '../components/Layout';

import { useDispatch } from 'react-redux';
import { createPost } from '../store/slices/postSlice';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
`;

function CreatePost() {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createPost({ title: data.title, text: data.text }));
  };

  return (
    <Layout header='Create Post'>
      <Container>
        <CreatePostForm onSubmit={onSubmit} />;
      </Container>
    </Layout>
  );
}

export default CreatePost;
