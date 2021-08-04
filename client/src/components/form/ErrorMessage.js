import styled from 'styled-components';

const ErrorMessage = styled.small.attrs({
  role: 'alert',
})`
  display: block;
  color: ${({ theme }) => theme.clrs.danger};
`;

export default ErrorMessage;
