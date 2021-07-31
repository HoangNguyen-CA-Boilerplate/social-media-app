import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  font-size: 1rem;
  font-weight: 600;
  display: block;

  background-color: ${({ theme }) => theme.clrs.primary[500]};
  color: ${({ theme }) => theme.clrs.neutral[100]};

  outline: none;
  border: 1px solid transparent;

  width: ${(props) => (props.submit ? '100%' : 'auto')};
  padding: 0.7em 1em;

  cursor: pointer;
  transition: 0.1s ease-out;

  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.clrs.primary[600]};
  }
`;

export default Button;
