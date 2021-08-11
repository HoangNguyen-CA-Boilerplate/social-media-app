import React from 'react';
import styled from 'styled-components';

import CreatePostForm from './CreatePostForm';
import Spinner from '../../components/Spinner';

import { useSelector } from 'react-redux';
import { selectToken } from '../../store/slices/authSlice.js';
import { useHistory } from 'react-router';
import { createPost } from '../../APIUtils';
import useAsyncFn from '../../hooks/useAsyncFn';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
`;

function CreatePost() {
  const token = useSelector(selectToken);
  const { execute, loading, error } = useAsyncFn(createPost);
  const history = useHistory();

  const onSubmit = async (formData) => {
    const data = await execute({ text: formData.text }, token);
    history.push(`/posts/${data._id}`);
  };

  let element;
  if (loading) {
    element = <Spinner />;
  } else {
    element = (
      <Container>
        <CreatePostForm onSubmit={onSubmit} error={error} />
      </Container>
    );
  }

  return element;
}

export default CreatePost;
