import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  display: block;
  width: 100%;

  font-size: 1rem;
  padding: 0.6em;
  outline: none;
  border: 1px solid grey;
`;

export default Input;
