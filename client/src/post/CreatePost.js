import React from 'react';
import styled from 'styled-components';
import CreatePostForm from './CreatePostForm';
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
    <Container>
      <CreatePostForm onSubmit={onSubmit} />;
    </Container>
  );
}

export default CreatePost;
