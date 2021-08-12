import React from 'react';
import styled from 'styled-components';

import useAsyncFn from '../../hooks/useAsyncFn';
import useTokenConfig from '../../hooks/useTokenConfig';

import CreatePostForm from './CreatePostForm';
import Spinner from '../../components/Spinner';

import { useHistory } from 'react-router';
import { createPost } from '../../APIUtils';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
`;

function CreatePost() {
  const config = useTokenConfig();
  const [state, execute] = useAsyncFn(createPost);
  const history = useHistory();

  const onSubmit = async (formData) => {
    const data = await execute({ text: formData.text }, config);
    history.push(`/posts/${data._id}`);
  };

  let element;
  if (state.loading) {
    element = <Spinner />;
  } else {
    element = (
      <Container>
        <CreatePostForm onSubmit={onSubmit} error={state.error} />
      </Container>
    );
  }

  return element;
}

export default CreatePost;
