import React from 'react';
import styled from 'styled-components';

import Modal from '../modal/Modal';
import Button from '../button/Button';

const StyledModal = styled(Modal)`
  max-width: 380px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.modal};
  & > * + * {
    margin-top: 1.5em;
  }
`;

const Message = styled.p`
  color: ${({ theme }) => theme.clrs.neutral[600]};
`;

function DeleteModal({ onDelete, ...props }) {
  return (
    <StyledModal {...props}>
      <Container>
        <Message>
          This can’t be undone and it will be removed from your profile.
        </Message>
        <Button onClick={onDelete} $fill $type='danger'>
          Delete
        </Button>
      </Container>
    </StyledModal>
  );
}

export default DeleteModal;
