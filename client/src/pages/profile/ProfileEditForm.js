import React from 'react';

import Form from '../../components/form/Form';
import FormGroup from '../../components/form/FormGroup';
import Button from '../../components/button/Button';

import { useForm } from 'react-hook-form';

function ProfileEditForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} name='Edit profile'>
      <FormGroup
        label='Display name:'
        error={errors.displayName?.message}
        inputProps={{
          ...register('displayName', {
            required: 'display name is required',
          }),
        }}
      />
      <FormGroup
        label='Bio:'
        error={errors.bio?.message}
        inputProps={{
          ...register('bio'),
        }}
      />

      <Button $fill submit>
        Save
      </Button>
    </Form>
  );
}

export default ProfileEditForm;
