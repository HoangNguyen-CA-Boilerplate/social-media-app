import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[900] + 'CC'};
  position: fixed;
  z-index: 50;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  margin: 0 !important;
`;
export default Backdrop;
