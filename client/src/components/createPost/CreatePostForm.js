import React from 'react';
import FormGroup from '../form/FormGroup';
import Form from '../form/Form';
import Button from '../button/Button';
import ErrorMessage from '../form/ErrorMessage';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
`;
const CreateButton = styled(Button)`
  margin-left: auto;
`;

function CreatePostForm({ onSubmit, error }) {
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
          type: 'text',
          ...register('text', {
            required: 'text is required',
          }),
        }}
      />

      <Controls>
        <ErrorMessage>{error}</ErrorMessage>
        <CreateButton submit small>
          Post
        </CreateButton>
      </Controls>
    </Form>
  );
}

export default CreatePostForm;
