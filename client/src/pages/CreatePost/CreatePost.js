import React, { useState } from 'react';
import styled from 'styled-components';

import CreatePostForm from './CreatePostForm';
import Spinner from '../../components/Spinner';

import { useSelector } from 'react-redux';
import { selectToken } from '../../store/slices/authSlice.js';
import { createPost } from '../../APIUtils';
import { useHistory } from 'react-router';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
`;

function CreatePost() {
  const token = useSelector(selectToken);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await createPost({ text: data.text }, token);
      history.push(`/posts/${res.data._id}`);
    } catch (e) {
      if (e.response) {
        return setError(e.response.data.error);
      }
      setError('something went wrong');
      setLoading(false);
    }
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
