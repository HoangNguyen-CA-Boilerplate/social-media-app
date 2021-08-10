import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import UserDisplay from '../user/UserDisplay';
import PostControl from './PostControl';
import { FaRegHeart } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { likePost, deletePost } from '../../APIUtils';
import { selectToken, selectUser } from '../../store/slices/authSlice';

const clickableStyles = css`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[200]};
  }
`;

const Container = styled.div`
  font-size: ${(props) => (props.em ? '1.4rem' : '1rem')};

  padding: ${({ theme }) => theme.padding.main};
  & > * + * {
    margin-top: 0.5em;
  }

  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};

  transition: background-color 0.2s ease-out;

  ${(props) => props.clickable && clickableStyles}
`;

const Text = styled.p`
  white-space: pre-wrap;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Post({ text, user, _id, likes, em }) {
  const history = useHistory();
  const token = useSelector(selectToken);
  const authUser = useSelector(selectUser);

  const [numLikes, setNumLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState(likes.includes(authUser._id));

  const auth = authUser._id === user._id;

  const onLike = async (e) => {
    e.stopPropagation();
    try {
      const res = await likePost(_id, token);
      if (res.data.likes) {
        setNumLikes(numLikes + 1);
        setUserLikes(true);
      } else {
        setNumLikes(numLikes - 1);
        setUserLikes(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onDelete = async (e) => {
    e.stopPropagation();
    try {
      const res = await deletePost(_id, token);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };

  const routeToPost = () => {
    history.push(`/posts/${_id}`);
  };

  const clickable = history.location.pathname !== `/posts/${_id}`;

  return (
    <Container onClick={routeToPost} clickable={clickable} em={em}>
      <UserDisplay user={user} onClick={routeToUser} />
      <Text> {text}</Text>
      <Controls>
        <PostControl
          icon={<FaRegHeart />}
          onClick={onLike}
          active={userLikes}
          label={numLikes}
        ></PostControl>
        {auth && (
          <PostControl
            icon={<RiDeleteBin5Line />}
            onClick={onDelete}
          ></PostControl>
        )}
      </Controls>
    </Container>
  );
}

export default Post;
