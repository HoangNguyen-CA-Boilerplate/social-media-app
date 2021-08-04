import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  display: block;
  width: 100%;

  font-size: 1rem;
  padding: 0.8em;
  outline: none;
  border: ${(props) =>
    props.error
      ? '2px solid ' + props.theme.clrs.danger
      : '2px solid ' + props.theme.clrs.neutral[200]};

  &:focus {
    border: 2px solid ${({ theme }) => theme.clrs.primary[500]};
  }
`;

export default Input;
