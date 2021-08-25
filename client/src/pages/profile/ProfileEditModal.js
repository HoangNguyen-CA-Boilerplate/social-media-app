import React from 'react';
import Modal from '../../components/modal/Modal';

import ProfileEditForm from './ProfileEditForm';

const ProfileEditModal = (props) => {
  const onSubmit = (data) => {};
  return (
    <Modal {...props} center header='Edit Profile'>
      <ProfileEditForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default ProfileEditModal;
