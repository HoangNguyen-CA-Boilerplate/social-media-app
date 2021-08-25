import React from 'react';
import { useForm } from 'react-hook-form';

import Form from '../../components/form/Form';
import FormGroup from '../../components/form/FormGroup';
import Button from '../../components/button/Button';

function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} name='Log in'>
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
              message: 'password must be at least 5 characters long ',
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

export default LoginForm;
