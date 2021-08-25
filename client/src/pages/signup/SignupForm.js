import React from 'react';
import { useForm } from 'react-hook-form';

import Form from '../../components/form/Form';
import Button from '../../components/button/Button';
import FormGroup from '../../components/form/FormGroup';

function Signup({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} name='Sign up'>
      <FormGroup
        label='Username:'
        error={errors.username?.message}
        inputProps={{
          ...register('username', {
            required: 'username is required',
            minLength: {
              value: 4,
              message: 'username must be at least 4 characters long',
            },
            maxLength: {
              value: 15,
              message: 'username must be at most 15 characters long',
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message:
                'username must only include alphanumeric characters and underscores',
            },
          }),
        }}
      />
      <FormGroup
        label='Email:'
        error={errors.email?.message}
        inputProps={{
          type: 'email',
          ...register('email', {
            required: 'email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'email is invalid',
            },
          }),
        }}
      />
      <FormGroup
        label='Password:'
        error={errors.password?.message}
        inputProps={{
          type: 'password',
          ...register('password', {
            required: 'password is required',
            minLength: {
              value: 5,
              message: 'password must be at least 5 characters long',
            },
          }),
        }}
      />

      <Button $fill submit>
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
