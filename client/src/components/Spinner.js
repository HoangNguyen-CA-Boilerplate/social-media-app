import styled, { keyframes } from 'styled-components';

const load8 = keyframes`
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  &,
  &::after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
  }
  font-size: 1rem;

  margin: 2em auto;
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid ${({ theme }) => theme.clrs.primary[100]};
  border-right: 5px solid ${({ theme }) => theme.clrs.primary[100]};
  border-bottom: 5px solid ${({ theme }) => theme.clrs.primary[100]};
  border-left: 5px solid ${({ theme }) => theme.clrs.primary[500]};

  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8} 1s infinite linear;
  animation: ${load8} 1s infinite linear;
`;

export default Spinner;
