import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Container = styled.div`
  font-size: 1.5rem;
  height: 2em;
  width: 2em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  color: white;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    filter: brightness(90%);
  }

  & > * {
    display: block;
  }
`;

function Avatar(props) {
  return (
    <Container {...props}>
      <FaUser />
    </Container>
  );
}

export default Avatar;
