import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  font-size: 1rem;
  font-weight: 600;

  width: ${(props) => (props.submit ? '100%' : 'auto')};
  padding: 0.7em 1em;
`;

export default Button;
