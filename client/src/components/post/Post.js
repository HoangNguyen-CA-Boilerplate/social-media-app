import React, { useState, useEffect } from 'react';

import styled, { css } from 'styled-components';
import UserPreview from '../user/UserPreview';
import DeleteModal from './DeleteModal';
import PostControl from './PostControl';

import { FaRegHeart } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';

export const clickableStyles = css`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[200]};
  }
`;

const Container = styled.div`
  font-size: ${(props) => (props.big ? '1.3rem' : '1rem')};

  padding: ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};

  transition: background-color 0.2s ease-out;

  & > * + * {
    margin-top: 0.5em;
  }

  ${(props) => props.clickable && clickableStyles}
`;

const Text = styled.p`
  white-space: pre-wrap;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Post({ post, onDelete, onLike, big }) {
  const [showDelete, setShowDelete] = useState(false);
  const [likes, setLikes] = useState(post?.likes);

  useEffect(() => {
    setLikes(post.likes);
  }, [post.likes]);

  const history = useHistory();
  const authUser = useSelector(selectUser);

  const clickable = history.location.pathname !== `/posts/${post?._id}`;

  const routeToPost = () => {
    if (clickable) history.push(`/posts/${post?._id}`);
  };

  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${post?.user?.username}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    onLike();

    if (post.likes.includes(authUser._id)) {
      setLikes(post.likes.filter((id) => id !== authUser._id));
    } else {
      setLikes([...post.likes, authUser._id]);
    }
  };

  const handleShowDelete = (e) => {
    e.stopPropagation();
    setShowDelete(true);
  };

  return (
    <>
      <DeleteModal
        show={showDelete}
        close={() => setShowDelete(false)}
        header='Delete post?'
        onDelete={onDelete}
      ></DeleteModal>

      <Container onClick={routeToPost} clickable={clickable} big={big}>
        <UserPreview user={post?.user} onClick={routeToUser} />
        <Text> {post?.text}</Text>
        <Controls>
          <PostControl
            icon={<FaRegHeart />}
            onClick={handleLike}
            active={likes.includes(authUser._id)}
            label={likes.length}
          ></PostControl>
          {authUser._id === post.user._id && (
            <PostControl
              icon={<RiDeleteBin5Line />}
              onClick={handleShowDelete}
            ></PostControl>
          )}
        </Controls>
      </Container>
    </>
  );
}

export default Post;
