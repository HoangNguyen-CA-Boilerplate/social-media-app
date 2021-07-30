import React from 'react';
import { useForm } from 'react-hook-form';

import Form from '../components/forms/Form';
import Input from '../components/forms/Input';
import Label from '../components/forms/Label';
import Button from '../components/Button';

import { login } from './authAPI';

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await login(data.email, data.password);
    console.log(res);
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

export default Login;
