import React from 'react';
import styled from 'styled-components';

import Backdrop from './Backdrop';

const Container = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[100]};
`;

function Modal({ show, children, toggle }) {
  if (!show) return null;
  return (
    <>
      <Backdrop onClick={toggle}>
        <Container>{children}</Container>
      </Backdrop>
    </>
  );
}

export default Modal;
