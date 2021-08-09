import React from 'react';
import FormGroup from '../components/form/FormGroup';
import Form from '../components/form/Form';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const CreateButton = styled(Button)`
  margin-left: auto;
`;

function CreatePostForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  return (
    <Form name='Create Post' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        label=''
        error={errors.text?.message}
        type='textarea'
        inputProps={{
          placeholder: "What's happening?",
          error: errors.text?.message,
          type: 'text',
          ...register('text', {
            required: 'text is required',
          }),
        }}
      />

      <CreateButton submit>Create Post</CreateButton>
    </Form>
  );
}

export default CreatePostForm;
