import React from 'react';
import Input from './Input';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

function FormGroup({ label, error, inputProps }) {
  return (
    <>
      <Label>
        {label}
        <Input {...inputProps}></Input>
        <ErrorMessage>{error}</ErrorMessage>
      </Label>
    </>
  );
}

export default FormGroup;
