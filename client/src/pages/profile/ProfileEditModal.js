import React from 'react';
import Modal from '../../components/modal/Modal';
import Spinner from '../../components/Spinner';
import AuthError from '../../components/auth/AuthError';

import ProfileEditForm from './ProfileEditForm';

import { useDispatch, useSelector } from 'react-redux';
import {
  editUser,
  selectEditError,
  selectEditStatus,
} from '../../store/slices/userSlice';

const ProfileEditModal = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(
      editUser({
        displayName: data.displayName,
        bio: data.bio,
        success: props.close,
      })
    );
  };

  const status = useSelector(selectEditStatus);
  const error = useSelector(selectEditError);

  let alert = null;
  if (status === 'loading') {
    alert = <Spinner />;
  } else if (error) {
    alert = <AuthError>{error}</AuthError>;
  }

  return (
    <Modal {...props} center header='Edit Profile'>
      {alert}
      <ProfileEditForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default ProfileEditModal;
