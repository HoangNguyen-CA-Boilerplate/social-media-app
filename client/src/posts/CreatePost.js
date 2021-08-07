import React from 'react';
import { useForm } from 'react-hook-form';
import FormGroup from '../components/form/FormGroup';
import Form from '../components/form/Form';
import Button from '../components/Button';

function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {};

  return (
    <Form name='Create Post' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        label='Title:'
        error={errors.title?.message}
        inputProps={{
          error: errors.title?.message,
          type: 'title',
          ...register('title', {
            required: 'title is required',
          }),
        }}
      ></FormGroup>
      <FormGroup
        label='Text:'
        error={errors.text?.message}
        inputProps={{
          error: errors.text?.message,
          type: 'text',
          ...register('text', {
            required: 'text is required',
          }),
        }}
      ></FormGroup>

      <Button submit>Submit</Button>
    </Form>
  );
}

export default CreatePost;
