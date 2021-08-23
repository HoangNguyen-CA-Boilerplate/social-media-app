import React from 'react';
import styled from 'styled-components';
import CreatePostForm from './CreatePostForm';
import Spinner from '../Spinner';
import Avatar from '../user/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCreateStatus,
  selectCreateError,
  createPost,
} from '../../store/slices/postsSlice';

const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
  & > * + * {
    margin-left: 0.8em;
    margin-top: 0.7em;
  }
`;

function CreatePost() {
  const dispatch = useDispatch();
  const error = useSelector(selectCreateError);
  const status = useSelector(selectCreateStatus);
  const onSubmit = (data) => {
    dispatch(createPost({ text: data.text }));
  };

  return (
    <Container>
      {status === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <Avatar></Avatar>
          <CreatePostForm onSubmit={onSubmit} error={error}></CreatePostForm>
        </>
      )}
    </Container>
  );
}

export default CreatePost;
