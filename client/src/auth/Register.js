import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Form from '../components/form/Form';
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import Button from '../components/Button';

import { register as registerUser } from '../store/slices/authSlice';

function Register() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerUser(data.email, data.password));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email:
        <Input {...register('email')}></Input>
      </Label>
      <Label>
        Password:
        <Input type='password' {...register('password')}></Input>
      </Label>
      <Button submit>Submit</Button>
    </Form>
  );
}

export default Register;
