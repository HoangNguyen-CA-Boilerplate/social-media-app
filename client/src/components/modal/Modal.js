import React from 'react';
import styled from 'styled-components';

import Backdrop from './Backdrop';

import { VscChromeClose } from 'react-icons/vsc';

const Container = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[100]};
  width: 100%;
  max-width: 800px;

  position: fixed;
  z-index: 100;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 !important;
`;

const TopBar = styled.div`
  padding: ${({ theme }) => theme.padding.modal};
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[400]};
  align-items: center;

  & > * + * {
    margin-left: 0.3em;
  }
`;

const Close = styled.div`
  border-radius: 50%;
  padding: 0.5em;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  & > * {
    display: block;
  }

  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[300]};
  }
`;

const Header = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

function Modal({ show, children, close }) {
  if (!show) return null;
  return (
    <>
      <Backdrop onClick={close}></Backdrop>
      <Container>
        <TopBar>
          <Close onClick={close}>
            <VscChromeClose />
          </Close>
          <Header>Header</Header>
        </TopBar>
        {children}
      </Container>
    </>
  );
}

export default Modal;
