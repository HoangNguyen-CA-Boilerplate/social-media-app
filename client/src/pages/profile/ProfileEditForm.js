import React from 'react';

import Form from '../../components/form/Form';
import FormGroup from '../../components/form/FormGroup';
import Button from '../../components/button/Button';

import { useForm } from 'react-hook-form';

function ProfileEditForm({ onSubmit, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      displayName: user?.displayName || '',
      bio: user?.bio || '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} name='Edit profile'>
      <FormGroup
        label='Display name:'
        error={errors.displayName?.message}
        inputProps={{
          ...register('displayName', {
            required: 'display name is required',
            maxLength: {
              value: 15,
              message:
                'display name can only have a maximum length of 15 characters',
            },
          }),
        }}
      />
      <FormGroup
        label='Bio:'
        error={errors.bio?.message}
        inputProps={{
          ...register('bio', {
            maxLength: {
              value: 160,
              message: 'bio can only have a maximum length of 160 characters',
            },
          }),
        }}
      />

      <Button $fill submit>
        Save
      </Button>
    </Form>
  );
}

export default ProfileEditForm;
