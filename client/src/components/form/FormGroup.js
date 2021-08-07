import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

function FormGroup({ label, error, inputProps, type }) {
  let inputElement;
  switch (type) {
    case 'textarea':
      inputElement = <TextArea {...inputProps} />;
      break;
    default:
      inputElement = <Input {...inputProps} />;
  }
  return (
    <>
      <Label>
        {label}
        {inputElement}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Label>
    </>
  );
}

export default FormGroup;
