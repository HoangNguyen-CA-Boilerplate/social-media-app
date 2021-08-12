import React from 'react';
import PostControl from './PostControl';
import { RiDeleteBin5Line } from 'react-icons/ri';

function DeleteControl({ onDelete }) {
  const handleDelete = async (e) => {
    e.stopPropagation();
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
