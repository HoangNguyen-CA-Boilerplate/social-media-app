import React from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.clrs.neutral[600]};

  & > * + * {
    margin-left: 0.2em;
  }
`;

const ControlLabel = styled.p`
  font-size: 0.9em;
`;

const ControlButton = styled.div`
  padding: 0.4em;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease-out;

  color: ${(props) =>
    props.active
      ? props.theme.clrs.accent1[500]
      : props.theme.clrs.neutral[600]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.accent1[100]};
    color: ${({ theme }) => theme.clrs.accent1[500]};
  }

  & > * {
    display: block;
  }
`;

function PostControl({ onClick, active, label, icon }) {
  return (
    <ControlContainer>
      <ControlButton onClick={onClick} active={active}>
        {icon}
      </ControlButton>
      {label && <ControlLabel>{label}</ControlLabel>}
    </ControlContainer>
  );
}

export default PostControl;
