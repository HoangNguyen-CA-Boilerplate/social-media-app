import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router';

function LinkButton({ to, children, ...otherProps }) {
  const history = useHistory();

  const handleTo = () => {
    history.push(to);
  };
  return (
    <Button onClick={handleTo} {...otherProps}>
      {children}
    </Button>
  );
}

export default LinkButton;
