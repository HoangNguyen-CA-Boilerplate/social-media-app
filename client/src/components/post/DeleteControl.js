import React from 'react';
import PostControl from './PostControl';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { deletePost } from '../../APIUtils';
import { useHistory } from 'react-router-dom';

function DeleteControl({ postId, tokenConfig }) {
  const history = useHistory();

  const onDelete = async (e) => {
    e.stopPropagation();
    try {
      await deletePost(postId, tokenConfig);
      history.push('/');
      // show popup
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <PostControl icon={<RiDeleteBin5Line />} onClick={onDelete}></PostControl>
  );
}

export default DeleteControl;
