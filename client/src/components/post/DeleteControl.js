import React from 'react';
import PostControl from './PostControl';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { deletePost } from '../../APIUtils';

import useAsyncFn from '../../hooks/useAsyncFn';

function DeleteControl({ postId, tokenConfig, onDelete }) {
  const [, execute] = useAsyncFn(deletePost);

  const handleDelete = async (e) => {
    e.stopPropagation();
    await execute(postId, tokenConfig);
    onDelete();
  };

  return (
    <PostControl
      icon={<RiDeleteBin5Line />}
      onClick={handleDelete}
    ></PostControl>
  );
}

export default DeleteControl;
